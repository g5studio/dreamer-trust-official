import Picture from '@shared/components/Picture';
import Skeleton, { SkeletonType } from '@shared/components/Skeleton';
import { DateFormatType, OverlayType } from '@shared/enums';
import { toggleOverlay } from '@shared/hooks/use-overlay';
import { translate, translation } from '@shared/hooks/use-translation';
import { isMobile, isPC, isTablet } from '@shared/hooks/use-window-size';
import { IBaseComponentProps } from '@shared/interfaces';
import { IEvent } from '@shared/models/event.model';
import { formatClasses } from '@utilities/helpers/format.helper';
import { transform } from '@utilities/helpers/time.helper';
import { Show } from 'solid-js';
import { useLayoutContext } from '@utilities/context/layout-context';
import { IRSVPDialogProps, RSVPDialog } from './RSVPDialog';

interface ISeminarCardProps extends IBaseComponentProps {
  eventData: IEvent['metaData'];
  hideRSVP?: boolean;
}

const SeminarEventCard = (props: ISeminarCardProps) => {
  const [{ mainContentAreaSize }] = useLayoutContext();
  /**
   * @description pc版為配合輪播元件，需動態調整padding x維持總寬度在1114px
   */
  const dynamicPaddingX = () => (isPC() ? (mainContentAreaSize().width - 96 - 1114) / 2 : 0);
  return (
    <section
      class={formatClasses(
        'flex',
        {
          'min-w-full flex-row justify-center': !isMobile(),
          'relative flex-col': isMobile(),
        },
        props.classes,
      )}
      style={{
        'padding-left': dynamicPaddingX() ? `${dynamicPaddingX() > 40 ? dynamicPaddingX() : 40}px` : undefined,
        'padding-right': dynamicPaddingX() ? `${dynamicPaddingX() > 40 ? dynamicPaddingX() : 40}px` : undefined,
      }}>
      <Picture
        src={
          props.eventData.imageUrl ??
          (isMobile() ? 'seminar/seminar-events-1-sm@3x.png' : 'seminar/seminar-events-1@3x.png')
        }
        pictureClasses="flex grow"
        classes={formatClasses('grow object-cover object-left', {
          'h-[441px] rounded-s-8': !isMobile(),
          'h-[150px] w-[238px] rounded-t-8': isMobile(),
        })}
        fallbackSlot={() => (
          <Skeleton
            type={SkeletonType.Rect}
            classes={formatClasses({
              'h-[441px] w-[636px] rounded-s-8': !isMobile(),
              'h-[150px] w-[238px] rounded-t-8': isMobile(),
            })}
          />
        )}
      />
      {/* 研討會內容 */}
      <article
        class={formatClasses('bg-black-5', {
          'pb- relative h-full rounded-e-8 px-6 pb-6 pt-25': !isMobile(),
          'w-[461px] min-w-[461px]': isTablet(),
          'w-[478px] min-w-[478px]': isPC(),
          'w-[238px] grow rounded-b-8 px-5 py-4': isMobile(),
        })}>
        {/* 研討會日期 */}
        <div
          class={formatClasses('absolute flex flex-col items-center  bg-primary-2 py-1 text-black-6', {
            'right-6_5 top-4 w-17_25 rounded-8': !isMobile(),
            'left-0 top-0 w-15 rounded-tl-8': isMobile(),
          })}>
          <span
            class={formatClasses('text-md', {
              'text-xs': isMobile(),
            })}>
            {transform({
              timestamp: props.eventData.startTime,
              formatType: DateFormatType.PureYear,
            })}
          </span>
          <span
            class={formatClasses('text-md', {
              'text-xs': isMobile(),
            })}>
            {transform({
              timestamp: props.eventData.startTime,
              formatType: DateFormatType.PureMonthShortcut,
            })}
          </span>
          <span class={formatClasses('text-lg', { 'text-xs': isMobile() })}>
            {transform({
              timestamp: props.eventData.startTime,
              formatType: DateFormatType.PureDate,
            })}
          </span>
        </div>
        <div class={formatClasses('space-y-4', { 'space-y-2': isMobile() })}>
          <div class="space-y-2 text-start text-black-2">
            <h5 class={formatClasses('text-xxl font-bold', { 'text-md': isMobile() })}>{props.eventData.title}</h5>
            <p class={formatClasses('text-lg', { 'text-xs': isMobile() })}>{props.eventData.description}</p>
          </div>
          <div class="space-y-2 text-start text-black-2">
            <p class={formatClasses('text-lg', { 'text-xs': isMobile() })}>
              {translate('common.date', {
                date: transform({
                  locale: translation.language,
                  timestamp: props.eventData.startTime,
                  formatType: DateFormatType.CustomizeLocaleShortFormat,
                  offset: -(new Date().getTimezoneOffset() / 60),
                }),
              })}
            </p>
            <p class={formatClasses('text-lg', { 'text-xs': isMobile() })}>
              {translate('common.time', {
                time: `${transform({
                  locale: translation.language,
                  timestamp: props.eventData.startTime,
                  formatType: DateFormatType.TwelveHourTime,
                  offset: -(new Date().getTimezoneOffset() / 60),
                })} CST - ${transform({
                  locale: translation.language,
                  timestamp: props.eventData.endTime,
                  formatType: DateFormatType.TwelveHourTime,
                  offset: -(new Date().getTimezoneOffset() / 60),
                })} CST`,
              })}
            </p>
            <p class={formatClasses('text-lg', { 'text-xs': isMobile() })}>
              {translate('home.top-2.location', { location: props.eventData.location })}
            </p>
          </div>
          <Show when={!props.hideRSVP}>
            <p
              class={formatClasses('flex flex-row items-center space-x-2 text-start text-lg text-black-2', {
                'text-xs': isMobile(),
              })}>
              <a
                onClick={() =>
                  toggleOverlay<IRSVPDialogProps>({
                    type: OverlayType.Custom,
                    action: 'open',
                    config: {
                      component: RSVPDialog,
                      props: {
                        eventData: props.eventData,
                      },
                    },
                    containerClass: 'flex items-center justify-center',
                  })
                }>
                RSVP
              </a>
              <span>{translate('seminars.reserve')}</span>
            </p>
          </Show>
        </div>
        {props.children}
      </article>
    </section>
  );
};

export default SeminarEventCard;
