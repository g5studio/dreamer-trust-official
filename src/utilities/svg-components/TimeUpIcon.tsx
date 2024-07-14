import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ITimeUpIconProps extends ISvgBaseComponentProps {
  fillClasses?: string;
}

export const TimeUpIcon = (props: ITimeUpIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M11.61 9.085h-1.35v1.364c0 .23-.183.415-.41.415a.413.413 0 01-.41-.415V9.085H8.093a.414.414 0 01-.39-.415c0-.221.171-.404.39-.415h1.348V6.89c0-.229.184-.415.41-.415.227 0 .41.186.41.415v1.363h1.348c.22.011.391.194.391.415a.414.414 0 01-.39.415v.002zM5.65 1.411c.11 0 .214.044.29.122.078.078.12.183.12.293v4.12L4.085 7.95a.407.407 0 01-.687-.187.418.418 0 01.107-.4l1.736-1.76V1.825c0-.11.042-.215.12-.293a.408.408 0 01.29-.122zm5.158 3.456a.406.406 0 01-.313-.046.414.414 0 01-.187-.257A4.83 4.83 0 006.33.951a4.793 4.793 0 00-4.823 2.332 4.91 4.91 0 00.286 5.398 4.783 4.783 0 005.042 1.798.417.417 0 01.2.809 5.604 5.604 0 01-5.91-2.104A5.752 5.752 0 01.79 2.858 5.616 5.616 0 016.443.125c2.258.33 4.096 2.003 4.657 4.239a.42.42 0 01-.046.316.411.411 0 01-.253.19l.007-.003z"
        class={customTwMerge('fill-black-7', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default TimeUpIcon;
