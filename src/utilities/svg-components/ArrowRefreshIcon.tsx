import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

export const ArrowRefreshIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
      class={customTwMerge('fill-white', props.fillClasses, props.classes)}>
      <path
        d="M8.8 7.343a.904.904 0 01-.01 1.277A11.635 11.635 0 005.266 17c0 5.876 4.34 10.756 9.983 11.603l-1.485-2.259a.912.912 0 01.247-1.252.884.884 0 011.235.25l2.431 3.698a.902.902 0 01-.576 1.493l-.102.005C9.534 30.538 3.462 24.466 3.462 17c0-3.667 1.44-7.1 4.061-9.669a.904.904 0 011.278.012zm8.222-3.881H17c7.466 0 13.538 6.072 13.538 13.538 0 4.298-1.974 8.247-5.415 10.83a.897.897 0 01-1.26-.18.901.901 0 01.18-1.263A11.642 11.642 0 0028.733 17c0-5.875-4.34-10.755-9.982-11.603l1.484 2.258a.912.912 0 01-.247 1.252.889.889 0 01-1.238-.254l-2.425-3.69a.902.902 0 01.482-1.482h.01A.693.693 0 0117 3.46h.022z"
        fill-rule="evenodd"
      />
    </svg>
  );
};
