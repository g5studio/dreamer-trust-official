import { ISvgBaseComponentProps } from '@shared/interfaces';

export const DataLineDataIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M8.013 19.613V.4a.382.382 0 01.354-.4h3.249c.1.002.195.043.264.116.07.072.108.17.106.271V19.6a.381.381 0 01-.354.4h-3.26a.379.379 0 01-.36-.387zm6.903-.009v-9.191A.387.387 0 0115.27 10h3.249a.378.378 0 01.267.122.388.388 0 01.103.295v9.174a.386.386 0 01-.355.413h-3.259a.384.384 0 01-.36-.404v.004zm-13.805 0V5.413a.387.387 0 01.355-.412h3.248a.378.378 0 01.268.122c.07.075.106.175.102.278v14.187A.387.387 0 014.73 20H1.47a.385.385 0 01-.359-.4v.004z"
        fill="#999"
        class={props.fillClasses}
      />
    </svg>
  );
};
