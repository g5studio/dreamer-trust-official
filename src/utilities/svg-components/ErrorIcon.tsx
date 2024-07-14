import { ISvgBaseComponentProps } from '@shared/interfaces';

interface IFavoriteIconProps extends ISvgBaseComponentProps {}

export const ErrorIcon = (props: IFavoriteIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M10 1.833a9.167 9.167 0 110 18.334 9.167 9.167 0 010-18.334zM10 3.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm3.934 3.566A.795.795 0 0114 8.116l-.066.074-2.81 2.81 2.81 2.81a.795.795 0 01-1.05 1.19l-.074-.066-2.81-2.81-2.81 2.81A.795.795 0 016 13.884l.066-.074L8.876 11l-2.81-2.81A.795.795 0 017.116 7l.074.066L10 9.876l2.81-2.81a.795.795 0 011.124 0z"
        fill="#BBB"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default ErrorIcon;
