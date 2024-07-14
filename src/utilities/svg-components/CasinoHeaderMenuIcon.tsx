import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

export const CasinoHeaderMenuIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      class={formatClasses(props.classes)}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.4516 12.7126C15.6093 14.05 14.4263 14.7336 12.9355 14.7444C12.0885 14.7489 11.2406 14.5251 10.4828 14.0924L9.51416 13.5393L9.63038 14.6255C9.75546 15.7945 10.0167 16.6104 10.4248 17.1H7.5754C7.98355 16.6104 8.24476 15.7945 8.36984 14.6256L8.48606 13.5394L7.51741 14.0925C6.75963 14.5251 5.91125 14.7506 5.06468 14.7445C3.57388 14.7337 2.39086 14.05 1.54857 12.7126C0.701546 11.3676 0.683499 9.76479 1.49904 8.31507C2.19655 7.07507 3.34446 6.02505 4.45458 5.0096C4.65407 4.82709 4.86046 4.63837 5.05863 4.45336C5.77656 3.78318 6.50842 3.13267 7.21614 2.50356C7.80059 1.98407 8.40131 1.45008 9.00003 0.900024C9.59875 1.45008 10.1995 1.98407 10.7839 2.50356C11.4917 3.13267 12.2235 3.78318 12.9414 4.45336C13.1397 4.63841 13.346 4.82713 13.5456 5.00967C14.6556 6.02509 15.8036 7.07507 16.5011 8.31503C17.3167 9.76472 17.2986 11.3676 16.4516 12.7126Z"
        class={formatClasses('fill-white', props.fillClasses)}
      />
    </svg>
  );
};

export default CasinoHeaderMenuIcon;
