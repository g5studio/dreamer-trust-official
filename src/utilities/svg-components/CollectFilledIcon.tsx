import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

const CollectFilledIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M15.146 1.001H5.014a2.428 2.428 0 00-2.503 2.34L2.5 19l7.5-2.996L17.5 19V3.357a2.44 2.44 0 00-2.354-2.356z"
        fill-rule="evenodd"
        class={formatClasses('fill-primary', props.fillClasses)}
      />
    </svg>
  );
};

export default CollectFilledIcon;
