import Button from '@shared/components/Button';
import { ErrorHandleType, OverlayType } from '@shared/enums';
import FormInput from '@shared/FormInput';
import { createCustomizeMutation } from '@shared/hooks/create-customize-mutation';
import { IForm, useForm } from '@shared/hooks/use-form';
import { toggleOverlay } from '@shared/hooks/use-overlay';
import { translate } from '@shared/hooks/use-translation';
import { isMobile } from '@shared/hooks/use-window-size';
import { IApiContactUsInput, Need } from '@utilities/api/http/schema/contact-us-api.schema';
import { mutationConfigs } from '@utilities/api/solid-query';
import { formatClasses } from '@utilities/helpers/format.helper';
import { validateEmail } from '@utilities/helpers/validator.helper';
import { For } from 'solid-js';

export const ContactUsForm = () => {
  const { register, submitForm, fields, setValue, checkFormValid } = useForm<keyof IApiContactUsInput>({
    name: '',
    company: '',
    email: '',
    mobileCountryCode: '',
    mobileNumber: '',
    needs: '[]',
    comments: '',
  });

  const toggleSuccessModal = () =>
    toggleOverlay({
      action: 'open',
      type: OverlayType.Custom,
      config: {
        component: ({ onClose }) => (
          <section class="shadow-modal flex w-[420px] flex-col items-center justify-center space-y-6 rounded-10 bg-black-5 px-16 py-8">
            <p
              class={formatClasses('text-xs', {
                'text-lg': !isMobile(),
              })}>
              {translate('seminars.form.success')}
            </p>
            <Button
              class={formatClasses('text-sm', {
                'text-5_25': !isMobile(),
              })}
              variant="primary"
              testId="rsvp-success-btn"
              onClick={onClose}>
              {translate('Close')}
            </Button>
          </section>
        ),
      },
    });

  const {
    mutation: { mutate: contactUs },
  } = createCustomizeMutation<object, IApiContactUsInput>({
    mutation: mutationConfigs.contactUs(),
    //! normally we need handle all error in service layer
    errorHandleType: ErrorHandleType.All,
    onError: () => {},
    onSettled: () => {},
    onSuccess: toggleSuccessModal,
  });

  const needs = () => JSON.parse(fields().needs.value) as Need[];

  const handleOnSubmit = (formData: Pick<IForm<keyof IApiContactUsInput>, 'fields' | 'isValid' | 'errors'>) => {
    const { name, company, email, mobileCountryCode, mobileNumber, comments } = formData.fields;
    contactUs({
      name: name.value,
      email: email.value,
      mobileCountryCode: mobileCountryCode.value ?? '+886',
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
      <article class={formatClasses('space-y-6 text-start text-black-2', {})}>
        <h5 class={formatClasses('text-[36px] text-black-1', { 'text-[40px]': isMobile() })}>
          {translate('contactUs.form.title')}
        </h5>
        <p class={formatClasses('text-lg', { 'text-xs': isMobile() })}>{translate('contactUs.form.description')}</p>
      </article>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(handleOnSubmit);
        }}
        class={formatClasses('flex flex-col items-end space-y-6', {
          'min-w-[528px]': !isMobile(),
        })}
        date-testid="rsvp-form">
        <FormInput
          legendI18nKey="Name"
          placeholderI18nKey="Please enter your name"
          register={(element) =>
            register({
              fieldName: 'name',
              element,
              validators: {
                required: (e) => !!e,
              },
            })
          }
        />
        <FormInput
          legendI18nKey="Email"
          placeholderI18nKey="Please enter your email address"
          register={(element) =>
            register({
              fieldName: 'email',
              element,
              validators: {
                required: (e) => !!e,
                format: validateEmail,
              },
            })
          }
        />
        <FormInput
          legendI18nKey="seminars.form.mobile"
          placeholderI18nKey="seminars.form.mobilePlaceholder"
          register={(element) =>
            register({
              fieldName: 'mobileNumber',
              element,
              validators: {
                required: (e) => !!e,
              },
            })
          }
        />
        <FormInput
          legendI18nKey="seminars.form.landline"
          placeholderI18nKey="seminars.form.landlinePlaceholder"
          register={(element) =>
            register({
              fieldName: 'company',
              element,
            })
          }
        />
        <fieldset class="flex w-full flex-col space-y-1">
          <legend class={formatClasses('text-lg', { 'text-xs': isMobile() })}>
            {translate('seminars.form.method')}
          </legend>
          <div class="flex flex-row items-center space-x-5">
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
                        'text-xs leading-4': isMobile(),
                      })}>
                      {translate(`seminars.form.${method}`)}
                    </span>
                  </div>
                );
              }}
            </For>
          </div>
        </fieldset>
        <FormInput
          legendI18nKey="seminars.form.comments"
          placeholderI18nKey="seminars.form.commentsPlaceholder"
          register={(element) =>
            register({
              fieldName: 'comments',
              element,
            })
          }
        />
        <Button
          disabled={
            !validateEmail(fields().email.value) ||
            !fields().name.value ||
            !fields().mobileNumber.value ||
            !fields().mobileCountryCode ||
            needs().length === 0
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
