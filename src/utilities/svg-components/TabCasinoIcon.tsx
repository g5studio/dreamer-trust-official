import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

// TabOther.svg
export const TabCasinoIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        class={formatClasses('fill-primary', props.fillClasses)}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 0H9C4.0305 0 0 4.029 0 9V15V18V27C0 28.656 1.344 30 3 30H7.5C8.8965 30 10.059 29.0415 10.395 27.75H10.434C10.434 26.5065 11.442 25.5 12.684 25.5H17.316C18.5595 25.5 19.566 26.5065 19.566 27.75H19.6065C19.941 29.0415 21.1035 30 22.5 30H27C28.656 30 30 28.656 30 27V18V15V9C30 4.029 25.9695 0 21 0M18.8043 9.75C18.8043 7.6785 17.1258 6 15.0543 6C12.9843 6 11.3043 7.6785 11.3043 9.75C9.2343 9.75 7.5543 11.4285 7.5543 13.5C7.5543 15.57 9.2343 17.25 11.3043 17.25C12.5238 17.25 13.5948 16.659 14.2803 15.759C13.9968 17.1225 13.4013 19.0305 12.1998 19.893C12.1998 19.893 11.6388 21 12.7428 21H15.0543H17.3673C18.4713 21 17.9103 19.893 17.9103 19.893C16.7088 19.0305 16.1133 17.1225 15.8298 15.759C16.5153 16.659 17.5863 17.25 18.8043 17.25C20.8758 17.25 22.5543 15.57 22.5543 13.5C22.5543 11.4285 20.8758 9.75 18.8043 9.75"
      />
    </svg>
  );
};
