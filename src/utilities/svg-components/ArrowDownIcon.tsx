import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

// down.svg
export const ArrowDownIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.25593 7.12713C5.85716 7.58759 5.14284 7.58759 4.74407 7.12713L0.437781 2.15465C-0.123095 1.50701 0.336958 0.5 1.19371 0.5L9.80629 0.500001C10.663 0.500001 11.1231 1.50701 10.5622 2.15465L6.25593 7.12713Z"
        class={formatClasses('fill-black-4', props.fillClasses)}
      />
    </svg>
  );
};
