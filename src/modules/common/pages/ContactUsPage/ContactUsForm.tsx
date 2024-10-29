import CountryCodeDropdown, { ICountryCodeDropdown } from '@modules/common/components/CountryCodeDropdown';
import Button from '@shared/components/Button';
import { ErrorHandleType, OverlayType } from '@shared/enums';
import FormInput from '@shared/FormInput';
import { createCustomizeMutation } from '@shared/hooks/create-customize-mutation';
import { IForm, useForm } from '@shared/hooks/use-form';
import { toggleOverlay } from '@shared/hooks/use-overlay';
import { translate } from '@shared/hooks/use-translation';
import { isMobile, isPC, isTablet } from '@shared/hooks/use-window-size';
import { IApiContactUsInput, Need } from '@utilities/api/http/schema/contact-us-api.schema';
import { mutationConfigs } from '@utilities/api/solid-query';
import { formatClasses } from '@utilities/helpers/format.helper';
import { validateEmail } from '@utilities/helpers/validator.helper';
import { createSignal, For } from 'solid-js';

export const ContactUsForm = () => {
  const initialFormValue = (): Record<keyof IApiContactUsInput, string> => ({
    name: '',
    company: '',
    email: '',
    mobileCountryCode: '',
    mobileNumber: '',
    needs: '[]',
    comments: '',
  });

  const { register, submitForm, fields, setValue, checkFormValid } =
    useForm<keyof IApiContactUsInput>(initialFormValue());

  const [countryCodeRef, setCountryCodeRef] = createSignal<ICountryCodeDropdown | undefined>();

  const toggleSuccessModal = () =>
    toggleOverlay({
      action: 'open',
      type: OverlayType.Custom,
      config: {
        component: ({ onClose }) => (
          <section class="flex w-[420px] flex-col items-center justify-center space-y-6 rounded-10 bg-black-5 px-16 py-8 shadow-modal">
            <p
              class={formatClasses('text-sm', {
                'text-lg': !isMobile(),
              })}>
              {translate('contactUs.form.success')}
            </p>
            <Button
              classes={formatClasses('text-sm', {
                'text-5_25': !isMobile(),
              })}
              variant="primary"
              testId="rsvp-success-btn"
              onClick={onClose}>
              {translate('common.close')}
            </Button>
          </section>
        ),
      },
    });

  const {
    mutation: { mutate: contactUs },
    isLoading,
  } = createCustomizeMutation<object, IApiContactUsInput>({
    mutation: mutationConfigs.contactUs(),
    //! normally we need handle all error in service layer
    errorHandleType: ErrorHandleType.All,
    onError: () => {},
    onSettled: () => {},
    onSuccess: () => {
      Object.keys(initialFormValue()).forEach((key: keyof IApiContactUsInput) => {
        setValue(key, initialFormValue()[key]);
      });
      countryCodeRef()?.reset();
      toggleSuccessModal();
    },
  });

  const needs = () => JSON.parse(fields().needs.value) as Need[];

  const handleOnSubmit = (formData: Pick<IForm<keyof IApiContactUsInput>, 'fields' | 'isValid' | 'errors'>) => {
    const { name, company, email, mobileCountryCode, mobileNumber, comments } = formData.fields;
    contactUs({
      name: name.value,
      email: email.value,
      mobileCountryCode: mobileCountryCode.value,
      mobileNumber: mobileNumber.value,
      needs: needs(),
      comments: comments.value,
      company: company.value,
    });
  };

  return (
    <div
      class={formatClasses('h-full w-full', {
        'space-y-20 px-6': isMobile(),
        'flex flex-row items-start space-x-20 px-10': !isMobile(),
      })}>
      <article
        class={formatClasses('space-y-6 text-start text-black-2', {
          'w-[336px]': isTablet(),
        })}>
        <h5 class={formatClasses('text-[36px] text-black-1', { 'text-[40px]': isMobile() })}>
          {translate('contactUs.form.title')}
        </h5>
        <p class={formatClasses('text-lg', { 'text-md': isMobile() })}>{translate('contactUs.form.description')}</p>
      </article>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(handleOnSubmit);
        }}
        class={formatClasses('flex flex-col items-end space-y-6', {
          'min-w-[528px]': isPC(),
          grow: isTablet(),
        })}
        date-testid="rsvp-form">
        <FormInput
          legendClasses={formatClasses({ 'text-md': isMobile() })}
          inputClasses={formatClasses({ 'text-md': isMobile() })}
          legendI18nKey="contactUs.form.name"
          placeholderI18nKey="contactUs.form.namePlaceholder"
          register={(element, updateValue) =>
            register({
              fieldName: 'name',
              element,
              validators: {
                required: (e) => !!e,
              },
              updateValue,
            })
          }
        />
        <FormInput
          legendClasses={formatClasses({ 'text-md': isMobile() })}
          inputClasses={formatClasses({ 'text-md': isMobile() })}
          legendI18nKey="contactUs.form.email"
          placeholderI18nKey="contactUs.form.emailPlaceholder"
          register={(element, updateValue) =>
            register({
              fieldName: 'email',
              element,
              updateValue,
              validators: {
                required: (e) => !!e,
                format: validateEmail,
              },
            })
          }
        />
        <FormInput
          legendClasses={formatClasses({ 'text-md': isMobile() })}
          inputClasses={formatClasses({ 'text-md': isMobile() })}
          legendI18nKey="contactUs.form.mobile"
          placeholderI18nKey="contactUs.form.mobilePlaceholder"
          inputmode="numeric"
          type="number"
          pseudoSlot={() => (
            <CountryCodeDropdown
              ref={setCountryCodeRef}
              handleOnChange={({ dialingCode }) => {
                setValue('mobileCountryCode', dialingCode);
              }}
              classes="pe-8"
              placeholderI18nKey="contactUs.form.areaCode"
            />
          )}
          register={(element, updateValue) =>
            register({
              fieldName: 'mobileNumber',
              element,
              updateValue,
              validators: {
                required: (e) => !!e,
              },
            })
          }
        />
        <FormInput
          legendClasses={formatClasses({ 'text-md': isMobile() })}
          inputClasses={formatClasses({ 'text-md': isMobile() })}
          legendI18nKey="contactUs.form.company"
          placeholderI18nKey="contactUs.form.companyPlaceholder"
          register={(element, updateValue) =>
            register({
              fieldName: 'company',
              element,
              updateValue,
            })
          }
        />
        <fieldset class="flex w-full flex-col space-y-1">
          <legend class={formatClasses('text-lg', { 'text-md': isMobile() })}>
            {translate('contactUs.form.need')}
          </legend>
          <div class={formatClasses('flex flex-row flex-wrap gap-4')}>
            <For each={Object.values(Need)}>
              {(method) => {
                const isChecked = () => needs().includes(method);
                return (
                  <div class="flex flex-row items-center space-x-2">
                    <button
                      onClick={() => {
                        setValue(
                          'needs',
                          JSON.stringify(isChecked() ? needs().filter((e) => e !== method) : [...needs(), method]),
                        );
                      }}
                      type="button"
                      class={formatClasses('h-4 w-4 rounded-4 border-0_25 border-primary-2', {
                        'bg-primary-2': isChecked(),
                      })}
                    />
                    <span
                      class={formatClasses('text-md leading-6', {
                        'text-md': isMobile(),
                      })}>
                      {translate(`contactUs.form.needs.${method}`)}
                    </span>
                  </div>
                );
              }}
            </For>
          </div>
        </fieldset>
        <FormInput
          legendClasses={formatClasses({ 'text-md': isMobile() })}
          inputClasses={formatClasses({ 'text-md': isMobile() })}
          legendI18nKey="contactUs.form.comments"
          placeholderI18nKey="contactUs.form.commentsPlaceholder"
          register={(element, updateValue) =>
            register({
              fieldName: 'comments',
              element,
              updateValue,
            })
          }
        />
        <Button
          disabled={
            !validateEmail(fields().email.value) ||
            !fields().name.value ||
            !fields().mobileNumber.value ||
            !fields().mobileCountryCode.value ||
            needs().length === 0 ||
            isLoading()
          }
          testId="rsvp-submit-btn"
          class={formatClasses('text-5_25', { 'text-sm': isMobile() })}
          type="submit"
          onClick={() => {
            checkFormValid();
          }}
          variant="primary">
          {translate('common.submit')}
        </Button>
      </form>
    </div>
  );
};
