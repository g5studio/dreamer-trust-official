import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

const EyeOpen2 = (props: ISvgBaseComponentProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    class={formatClasses('fill-black-3', props.classes)}>
    <path d="M2.942 8.45c4.331-4.332 11.002-3.942 14.9.87a.738.738 0 01-.046.966.573.573 0 01-.869-.05c-1.152-1.423-2.578-2.408-4.11-2.946a4.103 4.103 0 11-4.946-.21c-1.48.383-2.896 1.176-4.105 2.386-.243.243-.475.5-.693.77a.573.573 0 01-.87.05.738.738 0 01-.045-.965c.247-.306.51-.597.784-.872zm7.263-.868a2.872 2.872 0 100 5.744 2.872 2.872 0 000-5.744z" />
  </svg>
);

export default EyeOpen2;
