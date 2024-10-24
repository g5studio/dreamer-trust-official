import Button from '@shared/components/Button';
import { DateFormatType, ErrorHandleType } from '@shared/enums';
import FormInput from '@shared/FormInput';
import { createCustomizeMutation } from '@shared/hooks/create-customize-mutation';
import { IForm, useForm } from '@shared/hooks/use-form';
import { translate, translation } from '@shared/hooks/use-translation';
import { isMobile } from '@shared/hooks/use-window-size';
import { IBaseOverlay, IBaseOverlayProps } from '@shared/interfaces';
import { IEvent } from '@shared/models/event.model';
import { IApiEventInput, PreferredContactMethod } from '@utilities/api/http/schema/event-api.schema';
import { mutationConfigs } from '@utilities/api/solid-query';
import { formatClasses } from '@utilities/helpers/format.helper';
import { transform } from '@utilities/helpers/time.helper';
import { validateEmail } from '@utilities/helpers/validator.helper';
import { CancelIcon } from '@utilities/svg-components/CancelIcon';

export interface IRSVPDialogProps extends IBaseOverlayProps {
  eventData: IEvent['metaData'];
}

export const RSVPDialog = (props: IRSVPDialogProps & IBaseOverlay) => {
  const { register, submitForm } = useForm<keyof IApiEventInput>({
    comments: '',
    eventId: props.eventData.id,
    email: '',
    landline: '',
    mobileCountryCode: '',
    mobileNumber: '',
    name: '',
    preferredContactMethods: '',
  });

  const {
    mutation: { mutate: postEvent },
  } = createCustomizeMutation<object, IApiEventInput>({
    mutation: mutationConfigs.postEvent(),
    errorHandleType: ErrorHandleType.All,
    onError: () => {},
    onSettled: () => {},
    onSuccess: () => {},
  });

  const handleOnSubmit = ({ fields }: Pick<IForm<keyof IApiEventInput>, 'fields' | 'isValid' | 'errors'>) => {
    const { name, email, landline, mobileNumber, comments } = fields;
    postEvent({
      eventId: props.eventData.id,
      name: name.value,
      email: email.value,
      mobileCountryCode: '+886',
      mobileNumber: mobileNumber.value,
      landline: landline.value,
      preferredContactMethods: [PreferredContactMethod.Email],
      comments: comments.value,
    });
  };

  return (
    <div
      class={formatClasses('relative rounded-8 bg-black-6', {
        'max-w-[440px] p-6 pt-14': isMobile(),
        'max-w-[1100px] p-10': !isMobile(),
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
          class={formatClasses('space-y-6', {
            'shrink grow basis-1/2': !isMobile(),
          })}>
          <h3 class="text-9 font-normal">RSVP.</h3>
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
            legendI18nKey="Name"
            placeholderI18nKey="Please enter your name"
            register={(element) =>
              register({
                fieldName: 'name',
                element,
                validators: {
                  required: (e) => !!e,
                  format: validateEmail,
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
                },
              })
            }
          />
          <FormInput
            legendI18nKey="Mobile Number"
            placeholderI18nKey="Please enter your mobile number"
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
            legendI18nKey="Landline"
            placeholderI18nKey="Please enter your landline (If any)"
            register={(element) =>
              register({
                fieldName: 'landline',
                element,
                validators: {
                  required: (e) => !!e,
                },
              })
            }
          />
          <FormInput
            legendI18nKey="Questions or comments"
            placeholderI18nKey="Feel free to leave any questions or comments"
            register={(element) =>
              register({
                fieldName: 'comments',
                element,
                validators: {
                  required: (e) => !!e,
                },
              })
            }
          />
          <Button testId="rsvp-submit-btn" type="submit" onClick={() => {}} variant="primary">
            {translate('common.submit')}
          </Button>
        </form>
      </div>
    </div>
  );
};
