import CountryCodeDropdown from '@modules/common/components/CountryCodeDropdown';
import Button from '@shared/components/Button';
import { DateFormatType, ErrorHandleType, OverlayType } from '@shared/enums';
import FormInput from '@shared/FormInput';
import { createCustomizeMutation } from '@shared/hooks/create-customize-mutation';
import { IForm, useForm } from '@shared/hooks/use-form';
import { toggleOverlay } from '@shared/hooks/use-overlay';
import { translate, translation } from '@shared/hooks/use-translation';
import { isMobile, isPC, isTablet } from '@shared/hooks/use-window-size';
import { IBaseOverlay, IBaseOverlayProps } from '@shared/interfaces';
import { IEvent } from '@shared/models/event.model';
import { IApiEventInput, PreferredContactMethod } from '@utilities/api/http/schema/event-api.schema';
import { mutationConfigs } from '@utilities/api/solid-query';
import { formatClasses } from '@utilities/helpers/format.helper';
import { transform } from '@utilities/helpers/time.helper';
import { validateEmail } from '@utilities/helpers/validator.helper';
import { CancelIcon } from '@utilities/svg-components/CancelIcon';
import { For } from 'solid-js';

export interface IRSVPDialogProps extends IBaseOverlayProps {
  eventData: IEvent['metaData'];
}

export const RSVPDialog = (props: IRSVPDialogProps & IBaseOverlay) => {
  const { register, submitForm, fields, setValue, checkFormValid } = useForm<keyof IApiEventInput>({
    comments: '',
    eventId: props.eventData.id,
    email: '',
    landline: '',
    mobileCountryCode: '',
    mobileNumber: '',
    name: '',
    preferredContactMethods: '[]',
  });

  const preferredContactMethods = () => JSON.parse(fields().preferredContactMethods.value) as PreferredContactMethod[];

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
              {translate('seminars.form.success')}
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
    mutation: { mutate: postEvent },
    isLoading,
  } = createCustomizeMutation<object, IApiEventInput>({
    mutation: mutationConfigs.postEvent(),
    errorHandleType: ErrorHandleType.All,
    onError: () => {},
    onSettled: () => {
      props.onClose();
    },
    onSuccess: toggleSuccessModal,
  });

  const handleOnSubmit = (formData: Pick<IForm<keyof IApiEventInput>, 'fields' | 'isValid' | 'errors'>) => {
    const { name, email, landline, mobileNumber, comments } = formData.fields;
    postEvent({
      eventId: props.eventData.id,
      name: name.value,
      email: email.value,
      mobileCountryCode: '+886',
      mobileNumber: mobileNumber.value,
      landline: landline.value,
      preferredContactMethods: preferredContactMethods(),
      comments: comments.value,
    });
  };

  return (
    <div
      class={formatClasses('relative rounded-8 bg-black-6', {
        'max-h-[98vh] max-w-[440px] overflow-y-auto p-6 pt-14': isMobile(),
        'p-10': !isMobile(),
        'max-w-[calc(93.75vw)]': isTablet(),
        'max-w-[1100px]': isPC(),
      })}>
      <button
        type="button"
        onClick={() => {
          props.onClose();
        }}
        class={formatClasses('absolute', {
          'right-10 top-10': !isMobile(),
          'right-7_5 top-7_5': isMobile(),
        })}>
        <CancelIcon classes="h-4_5 w-4_5" fillClasses="fill-black-1" />
      </button>
      <div
        class={formatClasses('h-full w-full', {
          'space-y-6': isMobile(),
          'flex flex-row items-start space-x-20': !isMobile(),
        })}>
        <article
          class={formatClasses('', {
            'shrink grow basis-1/2 space-y-6': !isMobile(),
          })}>
          <h3
            class={formatClasses('font-normal', {
              'leading-13 text-9': !isMobile(),
              'text-7_5 font-bold leading-11': isMobile(),
            })}>
            RSVP.
          </h3>
          <div class="space-y-6">
            <div class="space-y-2 text-start text-black-2">
              <h5 class={formatClasses('text-xl font-bold text-black-1', { 'text-sm': isMobile() })}>
                {props.eventData.title}
              </h5>
              <p class={formatClasses('text-lg', { 'text-xs': isMobile() })}>{props.eventData.description}</p>
            </div>
            <div class="space-y-2 text-start text-black-2">
              <p class={formatClasses('text-lg', { 'text-xs': isMobile() })}>
                {translate('home.top-2.location', { location: props.eventData.location })}
              </p>
              <p class={formatClasses('text-lg', { 'text-xs': isMobile() })}>
                {translate('common.date', {
                  date: transform({
                    locale: translation.language,
                    timestamp: props.eventData.startTime,
                    formatType: DateFormatType.CustomizeLocaleShortFormat,
                    offset: -(new Date().getTimezoneOffset() / 60),
                  }),
                })}
              </p>
              <p class={formatClasses('text-lg', { 'text-xs': isMobile() })}>
                {translate('common.time', {
                  time: `${transform({
                    locale: translation.language,
                    timestamp: props.eventData.startTime,
                    formatType: DateFormatType.TwelveHourTime,
                    offset: -(new Date().getTimezoneOffset() / 60),
                  })} CST - ${transform({
                    locale: translation.language,
                    timestamp: props.eventData.endTime,
                    formatType: DateFormatType.TwelveHourTime,
                    offset: -(new Date().getTimezoneOffset() / 60),
                  })} CST`,
                })}
              </p>
            </div>
          </div>
        </article>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm(handleOnSubmit);
          }}
          class={formatClasses('flex flex-col items-end space-y-6', {
            'shrink grow basis-1/2 pt-12': !isMobile(),
          })}
          date-testid="rsvp-form">
          <FormInput
            legendI18nKey="seminars.form.name"
            placeholderI18nKey="seminars.form.namePlaceholder"
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
            legendI18nKey="seminars.form.Email"
            placeholderI18nKey="seminars.form.emailPlaceholder"
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
            inputmode="numeric"
            banCodes={['e']}
            type="number"
            pseudoSlot={() => (
              <CountryCodeDropdown
                handleOnChange={({ dialingCode }) => {
                  setValue('mobileCountryCode', dialingCode);
                }}
                classes="pe-8"
                placeholderI18nKey="seminars.form.areaCode"
              />
            )}
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
                fieldName: 'landline',
                element,
              })
            }
          />
          <fieldset class="flex w-full flex-col space-y-1">
            <legend class={formatClasses('text-lg', { 'text-xs': isMobile() })}>
              {translate('seminars.form.method')}
            </legend>
            <div class="flex flex-row items-center space-x-5">
              <For each={Object.values(PreferredContactMethod)}>
                {(method) => {
                  const isChecked = () => preferredContactMethods().includes(method);
                  return (
                    <div class="flex flex-row items-center space-x-2">
                      <button
                        onClick={() => {
                          setValue(
                            'preferredContactMethods',
                            JSON.stringify(
                              isChecked()
                                ? preferredContactMethods().filter((e) => e !== method)
                                : [...preferredContactMethods(), method],
                            ),
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
              preferredContactMethods().length === 0 ||
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
    </div>
  );
};
