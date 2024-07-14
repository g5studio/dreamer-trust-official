import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ITransactionRecordIconProps extends ISvgBaseComponentProps {}

export const TransactionRecordIcon = (props: ITransactionRecordIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M3.778 20A1.8 1.8 0 012 18.182V3.636a1.8 1.8 0 011.778-1.818h3.716a2.637 2.637 0 015.013 0h3.715A1.8 1.8 0 0118 3.636v14.546A1.8 1.8 0 0116.222 20H3.778zm0-1.818h12.444V3.636h-1.778v2.728H5.556V3.636H3.778v14.546zM9.111 2.727A.889.889 0 1010 1.818a.9.9 0 00-.889.909zM6.444 16.364v-1.818h7.112v1.818H6.444zm0-3.182v-1.819h7.112v1.818l-7.112.001zm0-3.182V8.182h7.112V10H6.444z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default TransactionRecordIcon;
