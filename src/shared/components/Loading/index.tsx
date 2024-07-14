import { customTwMerge } from '@utilities/helpers/format.helper';
import { IBaseComponentProps } from '@shared/interfaces';
import style from './index.module.scss';

interface IProps extends IBaseComponentProps {
  outerLayerClasses?: string;
  secondaryClasses?: string;
}

const Loading = (props: IProps) => {
  return (
    <div
      class={customTwMerge(
        'absolute flex items-center justify-center top-0 bottom-0 left-0 right-0',
        props.outerLayerClasses,
      )}>
      <div class="relative h-[80%] w-[100%]">
        <svg
          class={customTwMerge(
            'absolute top-0 bottom-0 left-0 right-0 m-auto w-[100%] h-[100%] origin-center animation-rotate',
            style['component-loading__spinner-container'],
            props.secondaryClasses,
          )}
          viewBox="25 25 50 50">
          <circle
            class={customTwMerge('animation-dash', style['component-loading__spinner'], props.classes)}
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="3"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
