import { IBaseComponentProps } from '@shared/interfaces';

export const CopyIcon = (props: IBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M17.56 7.5c.396 0 .723.299.768.684l.005.09v6.19a3.87 3.87 0 01-3.7 3.866l-.169.003h-6.19a.774.774 0 01-.09-1.542l.09-.005h6.19a2.322 2.322 0 002.318-2.185l.004-.137v-6.19c0-.428.346-.774.774-.774zm-5.06-5A2.5 2.5 0 0115 5v7.5a2.5 2.5 0 01-2.5 2.5H5a2.5 2.5 0 01-2.5-2.5V5A2.5 2.5 0 015 2.5h7.5zm0 1.667H5A.833.833 0 004.167 5v7.5c0 .46.373.833.833.833h7.5c.46 0 .833-.373.833-.833V5a.833.833 0 00-.833-.833z"
        fill="#999"
        fill-rule="evenodd"
      />
    </svg>
  );
};
