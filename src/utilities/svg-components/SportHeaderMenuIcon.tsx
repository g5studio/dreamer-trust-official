import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

export const SportHeaderMenuIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none"
      class={formatClasses(props.classes)}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6971 6.4561C10.6483 6.36105 10.5431 6.30005 10.4273 6.30005H6.89844L10.3811 1.31449C10.4392 1.23133 10.4428 1.12603 10.3904 1.03991C10.338 0.953497 10.2379 0.900024 10.1295 0.900024H5.36479C5.25194 0.900024 5.14888 0.9578 5.09828 1.04934L0.631377 9.14935C0.585207 9.23279 0.590267 9.33214 0.644464 9.41178C0.698974 9.49142 0.794558 9.54002 0.897891 9.54002H3.96009L0.623316 16.7253C0.566432 16.8481 0.617069 16.9907 0.742421 17.0603C0.79065 17.0871 0.844253 17.1 0.897576 17.1C0.983041 17.1 1.06732 17.0668 1.1257 17.0042L10.6551 6.74415C10.7298 6.66372 10.7459 6.5514 10.6971 6.4561Z"
        class={formatClasses('fill-white', props.fillClasses)}
      />
    </svg>
  );
};

export default SportHeaderMenuIcon;
