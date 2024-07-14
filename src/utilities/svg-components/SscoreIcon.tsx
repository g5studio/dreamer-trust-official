import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ISscoreIconProps extends ISvgBaseComponentProps {}

export const SscoreIcon = (props: ISscoreIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M4.143 9.548H1.857c-.486 0-.857.447-.857 1.033v6.886c0 .585.371 1.033.857 1.033h2.286c.486 0 .857-.448.857-1.033v-6.886c0-.586-.371-1.033-.857-1.033zm7-8.548H8.857C8.371 1 8 1.421 8 1.972v15.487c0 .55.371.972.857.972h2.286c.486 0 .857-.421.857-.972V1.972c0-.55-.371-.972-.857-.972zm7 3.727h-2.286c-.486 0-.857.448-.857 1.033v11.673c0 .55.371 1.033.857 1.033h2.286c.486 0 .857-.482.857-1.033V5.76c0-.585-.371-1.033-.857-1.033z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default SscoreIcon;
