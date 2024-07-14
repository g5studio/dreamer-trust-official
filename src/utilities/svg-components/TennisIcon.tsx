import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

function TennisIcon(props: ISvgBaseComponentProps) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M14.205 2.972a7.975 7.975 0 011.787 5.399 8.167 8.167 0 01-.37 2.086c-.715-.715-1.499-1.045-2.342-.984-.869.06-1.757.554-2.633 1.462-.65.67-1.302 1.573-1.951 2.698A27.648 27.648 0 007.487 16a8.014 8.014 0 01-7.48-8.343 7.95 7.95 0 01.848-3.26c1.022-.02 2.286.292 3.89 1.352C6.41 6.851 7.957 7.406 9.348 7.406c.15 0 .295-.008.44-.02 1.288-.11 2.407-.725 3.239-1.774a6.083 6.083 0 001.178-2.64zm-.832 7.868c.556-.041 1.112.293 1.657.996a7.999 7.999 0 01-6.028 4.115 26.37 26.37 0 01.858-1.627c1.257-2.173 2.506-3.411 3.513-3.484zM8.041 0l.297.008c1.73.08 3.308.7 4.577 1.695.03.213.037.498-.015.855a4.697 4.697 0 01-.93 2.188c-.6.76-1.376 1.19-2.3 1.27a3.116 3.116 0 01-.329.014c-1.123 0-2.421-.482-3.868-1.44C4.018 3.625 2.76 3.196 1.69 3.063A7.974 7.974 0 018.338.008z"
        class={customTwMerge('fill-primary', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
}

export default TennisIcon;
