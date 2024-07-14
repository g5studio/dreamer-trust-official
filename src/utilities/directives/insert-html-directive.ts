import { createEffect, onCleanup } from 'solid-js';
import DOMPurify from 'dompurify';
import { IBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IDOMPurify {
  sanitize: (input: string) => string;
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      insertHtml: IInsertHtmlProps;
    }
  }
}

export interface IInsertHtmlProps
  extends Required<Pick<IBaseComponentProps, 'testId'>>,
    Pick<IBaseComponentProps, 'classes'> {
  /**
   * 要插入的內容
   */
  html: string;
  /**
   * 預設子層第一項
   */
  position?: InsertPosition;
}

const { sanitize } = DOMPurify as IDOMPurify;

/**
 * insert sanitized html , avoid xxl attack
 */
export const insertHtml = (node: HTMLElement, accessor: () => IInsertHtmlProps) => {
  createEffect(() => {
    const { position = 'afterbegin', html, testId, classes } = accessor();
    const childrenHtml = `<div class = "${formatClasses(classes)}" data-testid ="${testId}">${sanitize(
      html.replace(/\\n/g, '<br/>'),
    )}</div>`;
    node.insertAdjacentHTML(position, childrenHtml);
    const childrenElement = Array.from(node.children).find(
      (childNode: HTMLElement) => childNode.getAttribute('data-testid') === testId,
    );
    onCleanup(() => {
      if (node.children.length && childrenElement) {
        node.removeChild(childrenElement);
      }
    });
  });
};
