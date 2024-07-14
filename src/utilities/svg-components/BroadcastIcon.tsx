import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IBroadcastIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const BroadcastIcon = (props: IBroadcastIconProps) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12,1 C14.5304683,1 16.5818182,3.13020563 16.5818182,5.75794743 L16.5818182,11.3859825 C16.5818182,14.0137243 14.5304683,16.1439299 12,16.1439299 C9.46953169,16.1439299 7.41818182,14.0137243 7.41818182,11.3859825 L7.41818182,5.75794743 C7.41818182,3.13020563 9.46953169,1 12,1 Z M12,2.32165207 C10.1724396,2.32165207 8.69090909,3.86013391 8.69090909,5.75794743 L8.69090909,11.3859825 C8.69090909,13.283796 10.1724396,14.8222778 12,14.8222778 C13.8275604,14.8222778 15.3090909,13.283796 15.3090909,11.3859825 L15.3090909,5.75794743 C15.3090909,3.86013391 13.8275604,2.32165207 12,2.32165207 Z"
        class={customTwMerge('fill-primary', props.fillClasses)}
      />
      <path
        d="M8.26169085,23 C7.91023691,23 7.62532721,22.7041381 7.62532721,22.339174 C7.62532721,21.9742098 7.91023691,21.6783479 8.26169085,21.6783479 L11.363,21.6774994 L11.3634111,19.5285432 C7.79574595,19.1945649 5,16.0808795 5,12.2891114 L5,9.26032541 C5,8.89536127 5.2849097,8.59949937 5.63636364,8.59949937 C5.98781757,8.59949937 6.27272727,8.89536127 6.27272727,9.26032541 L6.27272727,12.2891114 C6.27272727,15.5737886 8.83691461,18.2365457 12,18.2365457 C15.1630854,18.2365457 17.7272727,15.5737886 17.7272727,12.2891114 L17.7272727,9.26032541 C17.7272727,8.89536127 18.0121824,8.59949937 18.3636364,8.59949937 C18.7150903,8.59949937 19,8.89536127 19,9.26032541 L19,12.2891114 C19,16.0808795 16.2042541,19.1945649 12.6365889,19.5285432 L12.636,21.6774994 L15.7544179,21.6783479 C16.1058719,21.6783479 16.3907816,21.9742098 16.3907816,22.339174 C16.3907816,22.7041381 16.1058719,23 15.7544179,23 L8.26169085,23 Z"
        class={customTwMerge('fill-black-3', props.secondaryFillClasses)}
      />
    </svg>
  );
};
