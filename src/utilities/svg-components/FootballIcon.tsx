import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

function FootballIcon(props: ISvgBaseComponentProps) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 .8c1.408 0 2.72.424 3.824 1.128L11.6 2.4H8l-1.376-.672.28-.824C7.264.84 7.624.8 8 .8zm-1.976.304l-.272.824-2.048 1.024-1 .2a7.214 7.214 0 013.32-2.048zM8.8 3.2h2.4l2.152 2.872-1 2.056-2.104.496-2.624-3.072L8.8 3.2l-5.472.528L4 6.4l-.976 2.448-2.048.704A7.1 7.1 0 01.8 8c0-1.52.472-2.912 1.272-4.072l1.256-.2L8.8 3.2zm6.048 2.576c.232.696.352 1.448.352 2.224 0 1.152-.296 2.232-.776 3.2H13.6l-.672-2.672 1.2-2.4.72-.352zM4.8 6.4h2.4l2.248 2.624L8 11.2l-2.528.624-1.848-2.472L4.8 6.4 8 12l2.4 1.6-.696 1.376c-.552.128-1.12.224-1.704.224-1.4 0-2.696-.4-3.8-1.096l.928-1.376L8 12 4.8 6.4zm8.8 5.6h.4c-.8 1.2-2 2.136-3.352 2.672L11.2 13.6l2.4-1.6z"
        class={customTwMerge('fill-primary', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
}

export default FootballIcon;
