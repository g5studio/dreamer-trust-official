import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

const EmailIcon = (props: ISvgBaseComponentProps) => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.16667 4.01575H15.8333C17.099 4.01575 18.125 5.04588 18.125 6.31662V14.6834C18.125 15.9542 17.099 16.9843 15.8333 16.9843H4.16667C2.90101 16.9843 1.875 15.9542 1.875 14.6834V6.31662C1.875 5.04588 2.90101 4.01575 4.16667 4.01575ZM15.8333 5.27077H4.16667C3.59137 5.27077 3.125 5.73901 3.125 6.31662V14.6834C3.125 15.261 3.59137 15.7293 4.16667 15.7293H15.8333C16.4086 15.7293 16.875 15.261 16.875 14.6834V6.31662C16.875 5.73901 16.4086 5.27077 15.8333 5.27077Z"
      class={formatClasses('fill-black-1', props.fillClasses)}
    />
    <path
      opacity="0.6"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.7239 10.99L7.94303 10.01L3.77637 13.3567L4.55724 14.3367L8.7239 10.99ZM16.2239 13.3567L12.0572 10.01L11.2764 10.99L15.443 14.3367L16.2239 13.3567Z"
      class={formatClasses('fill-black-1', props.fillClasses)}
    />
    <path
      d="M15.4264 6.67688L16.2399 7.62976L10.6778 12.4165C10.3177 12.7264 9.79949 12.7502 9.41508 12.488L9.32194 12.4165L3.75977 7.62976L4.57325 6.67688L9.99901 11.3468L15.4264 6.67688Z"
      class={formatClasses('fill-black-1', props.fillClasses)}
    />
  </svg>
);
export default EmailIcon;
