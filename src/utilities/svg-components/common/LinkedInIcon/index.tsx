import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

const LinkedInIcon = (props: ISvgBaseComponentProps) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    class={formatClasses(props.classes)}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.041 0H17.959C8.04053 0 0 8.04052 0 17.959V18.041C0 27.9595 8.04053 36 17.959 36H18.041C27.9595 36 36 27.9595 36 18.041V17.959C36 8.04052 27.9595 0 18.041 0Z"
      class={formatClasses('fill-black-3', props.fillClasses)}
    />
    <path
      d="M8.71007 11.9528C8.23584 11.5126 8 10.9677 8 10.3194C8 9.67116 8.2371 9.10234 8.71007 8.6609C9.1843 8.22072 9.79475 8 10.5427 8C11.2906 8 11.8771 8.22072 12.3501 8.6609C12.8243 9.10107 13.0601 9.65477 13.0601 10.3194C13.0601 10.9841 12.823 11.5126 12.3501 11.9528C11.8758 12.3929 11.2742 12.6137 10.5427 12.6137C9.81115 12.6137 9.1843 12.3929 8.71007 11.9528ZM12.6616 14.4778V27.9732H8.39728V14.4778H12.6616Z"
      class={formatClasses('fill-black-6')}
    />
    <path
      d="M26.8573 15.8111C27.7869 16.8201 28.251 18.205 28.251 19.9682V27.735H24.2011V20.5156C24.2011 19.6264 23.9703 18.9352 23.51 18.4433C23.0496 17.9515 22.4291 17.7043 21.6521 17.7043C20.8752 17.7043 20.2546 17.9502 19.7943 18.4433C19.3339 18.9352 19.1031 19.6264 19.1031 20.5156V27.735H15.0293V14.4401H19.1031V16.2034C19.5156 15.6156 20.0718 15.1515 20.7705 14.8097C21.4693 14.4679 22.255 14.2976 23.1291 14.2976C24.6855 14.2976 25.929 14.8021 26.8573 15.8099V15.8111Z"
      class={formatClasses('fill-black-6')}
    />
  </svg>
);
export default LinkedInIcon;
