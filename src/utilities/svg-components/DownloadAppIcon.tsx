import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IDownloadAppIconProps extends ISvgBaseComponentProps {}

export const DownloadAppIcon = (props: IDownloadAppIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M10.1 0a.6.6 0 01.6.6L10.699 3H19a1 1 0 011 1v11.5a4 4 0 01-4 4h-.926l-3.66-3.659a2 2 0 00-2.701-.117l-.127.117-3.66 3.659H4a4 4 0 01-4-4V4a1 1 0 011-1h8.499L9.5.6a.6.6 0 01.6-.6zM5.5 7a.5.5 0 00-.492.41L5 7.5V9H3.5a.5.5 0 00-.09.992L3.5 10H5v1.5a.5.5 0 00.992.09L6 11.5V10h1.5a.5.5 0 00.09-.992L7.5 9H6V7.5a.5.5 0 00-.5-.5zm8 2.3a1 1 0 100 2 1 1 0 000-2zM16 7.5a1 1 0 100 2 1 1 0 000-2z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default DownloadAppIcon;
