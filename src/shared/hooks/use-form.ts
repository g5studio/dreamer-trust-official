import { createEffect, createSignal, on, onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';

type RegisterProps<FormField extends string> = {
  fieldName: FormField;
  element: HTMLInputElement;
  validators?: Validate;
  checkpoint?: 'oninput' | 'onchange';
};

export type Validate = PartialRecord<string, (input: string) => boolean>;
type FormError = PartialRecord<string, boolean>;
type InitFormType<FormField extends string = string> = Record<FormField, string>;
type FormErrors<FormField extends string = string> = Record<FormField, FormError>;
type FieldValue<FormField extends string = string> = {
  value: string;
  validators?: Validate;
  fieldName: FormField;
  /**
   * input元件是否於register後仍存在於畫面上，無被條件式隱藏(<Show></Show>)，若不存在則會跳過此欄位的error check
   */
  display?: boolean;
  /**
   * 針對 readonly 的 input 建立一個觸發 change event 的機制，會在 setValue 時自動觸發
   */
  triggerChangeEvent?: () => void;
};
type FormFields<FormField extends string> = Record<FormField, FieldValue<FormField>>;
type FormSetting = {
  /**
   * 是否針對單一欄位變動就會進行所有有註冊的欄位驗證，預設 false
   */
  realtimeValidate: boolean;
  /**
   * 是否在欄位初始化時就先對該欄位進行驗證，預設 false
   */
  validateOnInit?: boolean;
};
export interface IForm<FormField extends string> {
  fields: FormFields<FormField>;
  isValid: boolean;
  errors: FormErrors<FormField>;
  register: (props: RegisterProps<FormField>) => void;
  submitForm: (callback: (form: Pick<IForm<FormField>, 'fields' | 'isValid' | 'errors'>) => void) => void;
  checkFieldValid: (currentField: FieldValue<FormField>) => void;
  errorHandler: (fieldName: string, errorMsgMapping: PartialRecord<string, string>) => string | null;
  checkFormValid: () => void;
  setValue: (fieldName: FormField, value: string) => void;
  hasError: (fieldName: FormField) => boolean;
}

/**
 * 將 initForm 的欄位來初始化 Error 格式
 * @param formFields \{ account: '', password: ''}
 * @returns \{ errors: { account: {}, ... } }
 */
const initErrors = <T extends string>(keys: Array<T>): FormErrors<T> =>
  keys.reduce(
    (acc, cur) => {
      acc[cur] = {};
      return acc;
    },
    {} as Record<T, PartialRecord<string, boolean>>,
  );

/**
 * 將初始化 initForm 的欄位 mapping 成需要的格式
 * @param formFields e.g. { account: '', password: ''}
 * @returns \{ account: { value: '', fieldName: account}, ... }
 */
const initFields = <FormField extends string>(formFields: InitFormType<FormField>): FormFields<FormField> =>
  (Object.keys(formFields) as FormField[]).reduce((acc, cur) => {
    acc[cur] = {
      value: formFields[cur],
      fieldName: cur,
    };
    return acc;
  }, {} as FormFields<FormField>);

export const useForm = <FormField extends string>(
  formFields: InitFormType<FormField>,
  setting: FormSetting = { realtimeValidate: false, validateOnInit: false },
) => {
  const [fieldNames, setFieldNames] = createSignal<FormField[]>([]);
  const [form, setForm] = createStore<Pick<IForm<FormField>, 'fields' | 'isValid' | 'errors'>>({
    fields: { ...initFields(formFields) },
    isValid: false,
    errors: { ...initErrors<FormField>(Object.keys(formFields) as FormField[]) },
  });

  createEffect(() => {
    setFieldNames(Object.keys(formFields) as FormField[]);
  });

  /**
   * 回傳欄位是否有錯誤
   * @param fieldName 欄位名稱
   */
  const hasError = (fieldName: FormField) =>
    Object.keys(form.errors[fieldName]).some((validatorName) => form.errors[fieldName][validatorName]);

  /**
   * 針對單一欄位做驗證，開放外部呼叫
   * @param fieldName
   */
  const checkFieldValid = (currentField: FieldValue<FormField>) => {
    const { validators, value, fieldName, display } = currentField;

    const error: FormError = {};
    if (!validators) {
      return;
    }

    Object.keys(validators)?.forEach((key) => {
      if (display && !validators[key]?.(value)) {
        error[key] = true;
      } else {
        error[key] = false;
      }
    });

    setForm('errors', { [fieldName]: error } as FormErrors);
  };

  /**
   * 檢查有於 useForm 內註冊的所有欄位是否有 error
   * 透過 isValid 管理整個表單的狀態
   * @param reValidateAllFields 是否針對所有註冊欄位重新驗證，預設 false
   */
  const checkFormValid = (reValidateAllFields: boolean = false) => {
    if (reValidateAllFields) {
      Object.values(form.fields).forEach((field: FieldValue<FormField>) => checkFieldValid(field));
    }

    let isAllValid = true;
    fieldNames().forEach((fieldName) => {
      const fieldHasError = hasError(fieldName);

      if (fieldHasError) {
        isAllValid = false;
      }
    });

    setForm('isValid', isAllValid);
  };

  /**
   * 需在輸入元件上呼叫來進行註冊
   * @param props.fieldName 註冊的欄位名(需與 useForm hook 初始化時設定的欄位一致)
   * @param props.element 輸入元件的 Ref
   * @param props.validate \{ [validatorName]: validate Fn }
   * @param props.checkpoint 分為 'oninput' | 'onchange' 兩種時機點進行欄位的檢查，預設為 'oninput'
   */
  const register = (props: RegisterProps<FormField>) => {
    const handleInput = (e: Event) => {
      const target = e?.target as HTMLInputElement;

      setForm('fields', (field) => {
        return {
          ...field,
          [props.fieldName]: {
            ...field[props.fieldName],
            value: target.value,
          },
        };
      });

      if (props.checkpoint === 'oninput') {
        checkFieldValid(form.fields[props.fieldName]);
      }
    };

    const onChangeInput = () => {
      checkFieldValid(form.fields[props.fieldName]);
    };

    createEffect(() => {
      setForm('fields', (field) => {
        const formField = {
          ...field[props.fieldName],
          display: true,
          validators: props.validators,
          triggerChangeEvent: () => {
            // Create a new 'change' event
            const event = new Event('change');
            props.element.dispatchEvent(event);
          },
        };

        if (setting.validateOnInit) {
          checkFieldValid(formField);
        }

        return {
          ...field,
          [props.fieldName]: formField,
        };
      });

      props.element.addEventListener('input', handleInput);

      if (props.checkpoint === 'onchange') {
        // addEventListener only apply native event. e.g. blur, change
        props.element.addEventListener('change', onChangeInput);
      }
    });

    onCleanup(() => {
      setForm('fields', (field) => {
        const formField = {
          ...field[props.fieldName],
          display: false,
        };

        if (setting.validateOnInit) {
          checkFieldValid(formField);
        }

        return {
          ...field,
          [props.fieldName]: formField,
        };
      });

      props.element.removeEventListener('input', handleInput);

      if (props.checkpoint === 'onchange') {
        props.element.removeEventListener('change', onChangeInput);
      }
    });
  };

  /**
   * 針對有註冊的 validatorName 與傳入的 errorMsgMapping 比對並回傳錯誤訊息，僅會回傳最先比對到的錯誤，若取不到對應訊息則回傳空字串
   * @param fieldName 需要 mapping 錯誤訊息的欄位名，可以透過 fields.[field].fieldName 取得
   * @param errorMsgMapping eg. \{ required: translate('validate.required')}
   */
  const errorHandler = (fieldName: FormField, errorMsgMapping: PartialRecord<string, string>): string | null => {
    const currentErrorKeyByField = Object.keys(form.errors[fieldName]).find(
      (validatorName) => form.errors[fieldName][validatorName],
    );

    if (currentErrorKeyByField) {
      return errorMsgMapping[currentErrorKeyByField] ?? '';
    }

    return null;
  };

  /**
   * 送出表單會先檢查整個表單的狀態，並執行外部傳入 callback
   * @param callback 送出表單時的自定義 callback，會傳入整個 form 至 callback
   */
  const submitForm = (callback: (form: Pick<IForm<FormField>, 'fields' | 'isValid' | 'errors'>) => void) => {
    checkFormValid(true);

    if (form.isValid) {
      callback(form);
    }
  };

  /**
   * 針對特殊欄位(picker | dropdown)的手動設值需求。並會觸發 input change event。
   * @param fieldName 欄位名稱
   * @param value 欄位值
   */
  const setValue = (fieldName: FormField, value: string) => {
    setForm('fields', (field) => {
      return {
        ...field,
        [fieldName]: {
          ...field[fieldName],
          value,
        },
      };
    });

    form.fields[fieldName].triggerChangeEvent?.();
  };

  if (setting.realtimeValidate) {
    createEffect(
      on(
        () => fieldNames().map((fieldName: string) => form.errors[fieldName as FormField]),
        () => checkFormValid(),
      ),
      { defer: true },
    );
  }

  return {
    register,
    submitForm,
    fields: () => form.fields,
    errors: () => form.errors,
    isValid: () => form.isValid,
    checkFieldValid,
    errorHandler,
    setValue,
    checkFormValid,
    hasError,
  };
};
