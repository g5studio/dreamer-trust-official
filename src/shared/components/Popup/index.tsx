import { IBaseOverlay, IBaseOverlayProps } from '@shared/interfaces/base-component.interface';

import { Match, Show, Switch, JSX } from 'solid-js';
import Picture from '@shared/components/Picture';
import { translate } from '@shared/hooks/use-translation';
import { formatClasses } from '@utilities/helpers/format.helper';
import { ServerErrorCode } from '@shared/enums';
import { I18nKey } from '@shared/models/translation.model';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { insertHtml } from '@utilities/directives/insert-html-directive';
import { Slot } from '@shared/interfaces';

registerDirective(insertHtml);

export interface IPopupProps extends Omit<IBaseOverlayProps, 'children'> {
  type: 'error' | 'information' | 'success';
  i18nKeys: {
    title?: I18nKey;
    description?: I18nKey;
  };
  errorCode?: ServerErrorCode;
  /**
   * popup上方icon，預設依照type顯示對應icon
   * @description 允許傳資源路徑 or 實體元件
   */
  icon?: string | Slot;
  disableIcon?: boolean;
  /**
   * 自定義區域
   * @description args內提供onClose方法關閉彈窗
   */
  render?: (args: IBaseOverlay) => JSX.Element;
  contentClasses?: string;
}

/**
 * 系統提示彈窗
 * @external https://projects.invisionapp.com/d/main/default/#/console/21878514/463499242/preview
 */
const Popup = (props: IPopupProps & IBaseOverlay) => (
  <div
    class={`${formatClasses(
      'relative w-84 rounded-10 bg-layer-3 p-2_5',
      {
        'pt-10': !props.disableIcon,
      },
      props.classes,
    )}`}
    data-testid={props.testId}>
    <div data-empty class="absolute-position-center top-0 h-15 w-15 rounded-circle bg-inherit p-2">
      <Show when={!props.disableIcon}>
        <Show
          when={!props.icon}
          fallback={typeof props.icon === 'string' ? <Picture src={props.icon} /> : props.icon?.()}>
          <Switch>
            <Match when={props.type === 'information'}>
              <svg
                data-testid="popup-information-icon"
                class="h-full w-full"
                viewBox="0 0 40 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <title>238A4EDF-405A-4BCE-A527-B8FE64691817</title>
                <g stroke="none" stroke-width="1" class="fill-primary" fill-rule="evenodd">
                  <g transform="translate(-575.000000, -5040.000000)">
                    <g transform="translate(575.000000, 5040.000000)">
                      <path d="M20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 C31.045695,0 40,8.954305 40,20 C39.9869384,31.0402802 31.0402802,39.9869384 20,40 Z M20,27.0696296 C19.4308005,27.0486835 18.8758918,27.2506617 18.4533333,27.6325926 C18.0343242,27.9955939 17.7935918,28.5226557 17.7935918,29.077037 C17.7935918,29.6314183 18.0343242,30.1584801 18.4533333,30.5214815 C18.8712389,30.9141797 19.426685,31.1269943 20,31.1140741 C20.5854579,31.1248232 21.1553234,30.9250549 21.6059259,30.5511111 C22.0192908,30.1708338 22.2491852,29.6311755 22.237037,29.0696296 C22.2446238,28.5201311 22.014562,27.9941211 21.6059259,27.6266667 C21.1540594,27.2453498 20.5759973,27.0466739 19.9851852,27.0696296 L20,27.0696296 Z M17.7777778,8.88888889 L19.3481481,23.0311111 L20.6488889,23.0311111 L22.2222222,8.88888889 L17.7777778,8.88888889 Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </Match>
            <Match when={props.type === 'error'}>
              <svg
                class="h-full w-full"
                data-testid="popup-error-icon"
                viewBox="0 0 40 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <title>3313792B-7E78-4FEC-A884-6D6552DEE27E</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-695.000000, -5040.000000)" class="fill-red-1">
                    <g transform="translate(695.000000, 5040.000000)">
                      <path d="M20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 C31.045695,0 40,8.954305 40,20 C39.9869384,31.0402802 31.0402802,39.9869384 20,40 Z M31.6094757,8.39052429 C32.090121,8.87116957 32.1270937,9.62747765 31.7203939,10.1505326 L31.6094757,10.2761424 L21.886,20 L31.6094757,29.7238576 C32.1301748,30.2445567 32.1301748,31.0887767 31.6094757,31.6094757 C31.1288304,32.090121 30.3725224,32.1270937 29.8494674,31.7203939 L29.7238576,31.6094757 L20,21.886 L10.2761424,31.6094757 C9.75544332,32.1301748 8.91122335,32.1301748 8.39052429,31.6094757 C7.90987901,31.1288304 7.8729063,30.3725224 8.27960615,29.8494674 L8.39052429,29.7238576 L18.114,20 L8.39052429,10.2761424 C7.86982524,9.75544332 7.86982524,8.91122335 8.39052429,8.39052429 C8.87116957,7.90987901 9.62747765,7.8729063 10.1505326,8.27960615 L10.2761424,8.39052429 L20,18.114 L29.7238576,8.39052429 C30.2445567,7.86982524 31.0887767,7.86982524 31.6094757,8.39052429 Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </Match>
            <Match when={props.type === 'success'}>
              <svg
                class="h-full w-full"
                data-testid="popup-success-icon"
                viewBox="0 0 40 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <title>E25BC36E-6E84-41C4-A8A1-D807E46C855D</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-635.000000, -5040.000000)" class="fill-green-1">
                    <g transform="translate(635.000000, 5040.000000)">
                      <path d="M20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 C31.045695,0 40,8.954305 40,20 C39.9869384,31.0402802 31.0402802,39.9869384 20,40 Z M8.7503387,21.1654429 C8.12116068,20.534596 7.10106154,20.534596 6.47188352,21.1654429 C5.84270549,21.7962898 5.84270549,22.8190948 6.47188352,23.4499417 L14.5274391,31.5268648 C15.1566171,32.1577117 16.1767162,32.1577117 16.8058943,31.5268648 L34.5281165,13.757634 C35.1572945,13.1267871 35.1572945,12.1039821 34.5281165,11.4731352 C33.8989385,10.8422883 32.8788393,10.8422883 32.2496613,11.4731352 L15.6666667,28.1001166 L8.7503387,21.1654429 Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </Match>
          </Switch>
        </Show>
      </Show>
    </div>
    <section class={formatClasses('flex flex-col gap-3', props.contentClasses)}>
      <Show when={props.i18nKeys.title || props.errorCode}>
        <div class="flex flex-col">
          <h4 data-empty class="text-center text-black-1">
            {translate(props.i18nKeys.title)}
          </h4>
          <Show when={props.errorCode}>
            <small class="text-center text-black-3">{props.errorCode}</small>
          </Show>
        </div>
      </Show>
      <Show when={!!props.i18nKeys.description}>
        <article
          class="text-center text-primary"
          data-empty
          use:insertHtml={{
            testId: `${props.testId}-description`,
            html: translate(props.i18nKeys.description),
          }}
        />
      </Show>
      {props.render?.(props)}
    </section>
  </div>
);

export default Popup;
