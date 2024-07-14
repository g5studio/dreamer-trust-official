import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';
import { I18nKey } from '@shared/models/translation.model';
import { translate } from '@shared/hooks/use-translation';
import Picture from '../Picture';

interface INoInfoProps extends IBaseComponentProps {
  text?: I18nKey;
}

const NoInfo = (props: INoInfoProps) => (
  <div
    data-testid={props.testId}
    class={customTwMerge('flex flex-col items-center justify-center flex-1', props.classes)}>
    <div class="w-25 h-25">
      <Picture src="/shared/empty.png" classes="w-full h-full" />
    </div>
    <span class="text-lg text-black-5 mt-2_5 text-center">{translate(props.text)}</span>
  </div>
);

export default NoInfo;
