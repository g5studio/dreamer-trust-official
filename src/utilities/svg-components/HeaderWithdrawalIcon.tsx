import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

export const HeaderWithdrawalIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      class={props.classes}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        class={formatClasses('fill-primary', props.fillClasses)}
        d="M16.4999 7.8681C16.4999 8.59905 15.8849 9.19209 15.1269 9.19209H13.0079C12.2489 9.19209 11.6349 8.59905 11.6349 7.8681V7.19212C11.6349 6.46117 12.2489 5.86813 13.0079 5.86813H15.1269C15.8849 5.86813 16.4999 6.46117 16.4999 7.19212V7.8681ZM16 11.9298H4.00004C3.72404 11.9298 3.50004 11.7148 3.50004 11.4477C3.50004 11.1815 3.72404 10.9655 4.00004 10.9655H16C16.276 10.9655 16.5 11.1815 16.5 11.4477C16.5 11.7148 16.276 11.9298 16 11.9298ZM16 13.8584H4.00004C3.72404 13.8584 3.50004 13.6433 3.50004 13.3762C3.50004 13.1101 3.72404 12.8941 4.00004 12.8941H16C16.276 12.8941 16.5 13.1101 16.5 13.3762C16.5 13.6433 16.276 13.8584 16 13.8584ZM16.117 3.25098H3.883C2.291 3.25098 1 4.4959 1 6.03108V13.9722C1 15.5073 2.291 16.7513 3.883 16.7513H16.117C17.709 16.7513 19 15.5073 19 13.9722V6.03108C19 4.4959 17.709 3.25098 16.117 3.25098Z"
        fill="#333333"
      />
    </svg>
  );
};
