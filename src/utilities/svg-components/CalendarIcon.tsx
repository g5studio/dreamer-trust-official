import { ISvgBaseComponentProps } from '@shared/interfaces';

// calendar.svg
export const CalendarIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M2 20a2 2 0 01-2-2V4a2 2 0 012-2h3V.75a.75.75 0 011.5 0V2h7V.75a.75.75 0 111.5 0V2h3a2 2 0 012 2v14a2 2 0 01-2 2H2zM1.508 3.91L1.5 4v14a.5.5 0 00.41.491L2 18.5h16a.5.5 0 00.492-.41L18.5 18V4a.5.5 0 00-.41-.491L18 3.5h-3v.75a.75.75 0 11-1.5 0V3.5h-7v.75a.75.75 0 01-1.5 0V3.5H2a.5.5 0 00-.492.41zM5.75 14.5a.75.75 0 110-1.5h8.5a.75.75 0 110 1.5h-8.5zm0-4.5a.75.75 0 010-1.5h8.5a.75.75 0 110 1.5h-8.5z"
        fill-rule="evenodd"
      />
    </svg>
  );
};
