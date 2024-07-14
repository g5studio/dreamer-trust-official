import { IBaseOverlay, IBaseOverlayProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { CloseIcon } from '@utilities/svg-components';
import Picture from '../Picture';

export interface IImageModalProps extends IBaseOverlayProps {
  imagePath: string;
}

const ImageModal = (props: IImageModalProps & IBaseOverlay) => (
  <div
    data-testid={props.testId}
    class={formatClasses('h-full w-full flex items-center justify-center relative', props.classes)}>
    <CloseIcon classes="absolute w-8 h-8 top-1 right-1 p-2 z-normal" fillClasses="fill-white" />
    <Picture src={props.imagePath} classes="max-w-full max-h-full" />
  </div>
);
export default ImageModal;
