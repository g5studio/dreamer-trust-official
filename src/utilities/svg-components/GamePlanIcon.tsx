import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IGamePlanIconProps extends ISvgBaseComponentProps {}

export const GamePlanIcon = (props: IGamePlanIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M10 1a9 9 0 110 18 9 9 0 010-18zm-.007 12a.935.935 0 00-.7.278 1.009 1.009 0 000 1.43.94.94 0 00.7.292c.268.004.528-.095.724-.278.187-.195.29-.457.283-.728a.989.989 0 00-.284-.716A1.008 1.008 0 009.993 13zm.151-8a3.091 3.091 0 00-2.293.835A3.033 3.033 0 007 8.142h1.493c-.032-.461.083-.92.328-1.312a1.412 1.412 0 011.232-.53c.385-.024.763.11 1.047.37.252.283.384.652.368 1.03a1.476 1.476 0 01-.354.946l-.158.185a7.161 7.161 0 00-1.532 1.684c-.19.406-.28.852-.262 1.3V12h1.502v-.184a1.956 1.956 0 01.2-.876c.124-.253.303-.475.524-.649.574-.509.995-.9 1.127-1.048A2.68 2.68 0 0013 7.612a2.426 2.426 0 00-.786-1.912 2.966 2.966 0 00-2.07-.7z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default GamePlanIcon;
