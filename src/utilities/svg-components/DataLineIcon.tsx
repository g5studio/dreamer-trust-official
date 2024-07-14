import { ISvgBaseComponentProps } from '@shared/interfaces';

export const DataLineIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M17.942 8.97h-7.437V2.034a8.02 8.02 0 017.437 6.936zM9.5 9.427a.186.186 0 00.005.023c0 .007-.005.014-.005.021a.5.5 0 00.5.5h8.384a.485.485 0 00.264-.086.494.494 0 00.351-.5A9.038 9.038 0 0010 1a.5.5 0 00-.5.5v7.927zm8.976 1.583a.5.5 0 00-.584.406 8.012 8.012 0 01-8.035 6.6A8.007 8.007 0 017.646 2.356a.502.502 0 10-.3-.959 9.002 9.002 0 002.497 17.6 9.008 9.008 0 009.035-7.406.5.5 0 00-.406-.582"
        fill="#FFF"
        fill-rule="evenodd"
        class={props.fillClasses}
      />
    </svg>
  );
};
