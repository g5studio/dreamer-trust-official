import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IPromotionIconProps extends ISvgBaseComponentProps {}

export const PromotionIcon = (props: IPromotionIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M5.032 5C3.844 4.127 2.968 2.802 2.968.85l.02-.115a.857.857 0 01.548-.672A.978.978 0 013.884 0C5.64 0 8.52.626 9.98 2.663 11.442.625 14.319 0 16.072 0c.121 0 .236.02.348.063a.86.86 0 01.55.681c.004.008.018.05.018.105 0 1.953-.876 3.278-2.064 4.151h2.41C18.8 5 20 6.2 20 7.667v9.666C20 18.8 18.8 20 17.333 20H2.667A2.675 2.675 0 010 17.333V7.667C0 6.2 1.2 5 2.667 5zM10 7.5c-.55 0-1 .45-1 1v3H6c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3v-3c0-.55-.45-1-1-1zm5.042-5.708c-1.267.192-3.518.826-4.034 2.915 1.269-.192 3.519-.826 4.034-2.915zm-10.128 0C5.43 3.881 7.68 4.515 8.948 4.707c-.515-2.089-2.766-2.723-4.034-2.915z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default PromotionIcon;
