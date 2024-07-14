import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ISearchIcon extends ISvgBaseComponentProps {
  width?: string;
  height?: string;
}
const SearchIcon = (props: ISearchIcon) => {
  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? '1em'}
      height={props?.height ?? '1em'}
      class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-160.000000, -351.000000)" class={customTwMerge('fill-black-3', props.fillClasses)}>
          <g transform="translate(160.000000, 351.000000)">
            <path d="M10.8,2.1 C15.6048773,2.1 19.5,5.99512268 19.5,10.8 C19.5,12.8410383 18.7971561,14.7179187 17.620294,16.2018155 L21.6111072,20.1968928 C22.0016315,20.5874171 22.0016315,21.2205829 21.6111072,21.6111072 C21.2205829,22.0016315 20.5874171,22.0016315 20.1968928,21.6111072 L16.205826,17.6171114 C14.7213011,18.7958889 12.8428775,19.5 10.8,19.5 C5.99512268,19.5 2.1,15.6048773 2.1,10.8 C2.1,5.99512268 5.99512268,2.1 10.8,2.1 Z M10.8,3.9 C6.98923523,3.9 3.9,6.98923523 3.9,10.8 C3.9,14.6107648 6.98923523,17.7 10.8,17.7 C14.6107648,17.7 17.7,14.6107648 17.7,10.8 C17.7,6.98923523 14.6107648,3.9 10.8,3.9 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SearchIcon;
