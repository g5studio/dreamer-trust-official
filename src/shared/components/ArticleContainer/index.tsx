import { translate } from '@shared/hooks/use-translation';
import { isMobile, isPC, isTablet } from '@shared/hooks/use-window-size';
import { Slot } from '@shared/interfaces';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { I18nKey } from '@shared/models/translation.model';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Show } from 'solid-js';

interface IArticleContainerProps extends IBaseComponentProps {
  titleI18nKey: I18nKey;
  subTitleI18nKey: I18nKey;
  firstChildrenSlot?: Slot;
  sectionClasses?: string;
  subTitleClasses?: string;
  sectionStyle?: IBaseComponentProps['style'];
}

const ArticleContainer = (props: IArticleContainerProps) => {
  return (
    <article
      ref={props.ref}
      data-testid={props.testId}
      class={formatClasses(
        'relative flex flex-col items-center text-center text-center',
        {
          'px-10': isTablet(),
          'px-6': isMobile(),
        },
        props.classes,
      )}>
      {props.firstChildrenSlot?.()}
      <div class="space-y-4">
        <Show when={props.titleI18nKey}>
          <h5
            class={formatClasses(' text-primary-3 ', {
              'text-sm': isMobile(),
              'text-5_5': !isMobile(),
            })}>
            {translate(props.titleI18nKey)}
          </h5>
        </Show>
        <Show when={props.subTitleI18nKey}>
          <h1
            class={formatClasses(
              'text-primary-3',
              {
                'text-5_5': isMobile(),
                'text-7': !isMobile(),
              },
              props.subTitleClasses,
            )}>
            {translate(props.subTitleI18nKey)}
          </h1>
        </Show>
      </div>
      <span class="mt-2 h-2 w-8 rounded-[99px] bg-primary-3" />
      <section
        class={formatClasses(
          'mt-10 flex',
          {
            'flex-row': isPC(),
            'flex-col': !isPC(),
          },
          props.sectionClasses,
        )}
        style={props.sectionStyle}>
        {props.children}
      </section>
    </article>
  );
};
export default ArticleContainer;
