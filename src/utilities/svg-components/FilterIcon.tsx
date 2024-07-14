import { ISvgBaseComponentProps } from '@shared/interfaces';

// filter.svg
export const FilterIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M8.002 10.688l-6.47-7.65a.833.833 0 01.636-1.371h16.667c.71 0 1.094.83.636 1.371l-6.47 7.65V17.5a.833.833 0 01-1.205.745L8.462 16.58a.833.833 0 01-.46-.746v-5.145zm9.037-7.355H3.964l5.507 6.512c.127.15.197.341.197.538v4.935l1.667.834v-5.769c0-.197.07-.387.197-.538l5.507-6.512z"
        fill-rule="evenodd"
      />
    </svg>
  );
};
