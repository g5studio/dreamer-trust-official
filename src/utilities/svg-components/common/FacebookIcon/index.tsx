import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

const FacebookIcon = (props: ISvgBaseComponentProps) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    class={formatClasses(props.classes)}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35.9975 18.0006C35.9975 27.0917 29.2588 34.6075 20.5048 35.8272C19.6862 35.9407 18.8488 35.9999 17.9987 35.9999C17.0175 35.9999 16.054 35.9218 15.1156 35.7704C6.54568 34.3906 0 26.9593 0 18.0006C0 8.0594 8.05914 0 18 0C27.9409 0 36 8.0594 36 18.0006H35.9975Z"
      class={formatClasses('fill-black-3', props.fillClasses)}
    />
    <path
      d="M20.5048 14.4539V18.3752H25.3554L24.5873 23.6573H20.5048V35.8271C19.6862 35.9406 18.8488 35.9999 17.9987 35.9999C17.0175 35.9999 16.0539 35.9217 15.1156 35.7704V23.6573H10.6421V18.3752H15.1156V13.5774C15.1156 10.6008 17.5283 8.18677 20.506 8.18677V8.18929C20.5148 8.18929 20.5224 8.18677 20.5312 8.18677H25.3566V12.755H22.2036C21.2665 12.755 20.506 13.5156 20.506 14.4527L20.5048 14.4539Z"
      class={formatClasses('fill-black-6')}
    />
  </svg>
);
export default FacebookIcon;
