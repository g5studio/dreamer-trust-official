import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IFavoriteIconProps extends ISvgBaseComponentProps {}

export const FavoriteIcon = (props: IFavoriteIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M14.117 3.001H6.01c-1.071-.03-1.966.783-2.002 1.82L4 17l6-2.33L16 17V4.833c-.04-1.01-.868-1.799-1.883-1.832z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default FavoriteIcon;
