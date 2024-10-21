import { translate } from '@shared/hooks/use-translation';
import { isPC } from '@shared/hooks/use-window-size';
import { Slot } from '@shared/interfaces';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { I18nKey } from '@shared/models/translation.model';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IArticleContainerProps extends IBaseComponentProps {
  titleI18nKey: I18nKey;
  subTitleI18nKey: I18nKey;
  firstChildrenSlot?: Slot;
  sectionClasses?: string;
}

const ArticleContainer = (props: IArticleContainerProps) => {
  return (
    <article
      ref={props.ref}
      data-testid={props.testId}
      class={formatClasses(
        'relative flex flex-col items-center text-center text-center',
        {
          'px-12': isPC(),
          'px-6': !isPC(),
        },
        props.classes,
      )}>
      {props.firstChildrenSlot?.()}
      <h5 class="text-sm text-primary-3 xl:text-5_5">{translate(props.titleI18nKey)}</h5>
      <h1 class="text-5_5 text-primary-3 xl:text-7">{translate(props.subTitleI18nKey)}</h1>
      <span class="mt-2 h-2 w-8 rounded-[99px] bg-primary-3" />
      <section
        class={formatClasses(
          'mt-10 flex',
          {
            'flex-row': isPC(),
            'flex-col': !isPC(),
          },
          props.sectionClasses,
        )}>
        {props.children}
      </section>
    </article>
  );
};
export default ArticleContainer;
