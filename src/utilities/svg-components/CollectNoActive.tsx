import { formatClasses } from '@utilities/helpers/format.helper';
import { ISvgBaseComponentProps } from '@shared/interfaces';
// collect-no-active.svg
export const CollectNoActive = (props: ISvgBaseComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-10.000000, -258.000000)" class={formatClasses('fill-black-5', props.fillClasses)}>
          <g transform="translate(0.000000, 244.000000)">
            <g transform="translate(10.000000, 15.000000)">
              <path d="M15.1458883,1.00135134 L5.0139364,1.00108386 C3.67444336,0.961552702 2.55686352,2.0082631 2.51105904,3.34026766 L2.5,19 L10.0002513,16.0041912 L17.5,18.9997993 L17.5,3.35697151 C17.4503091,2.05889765 16.4151201,1.04425911 15.1458883,1.00135134 Z M15.0014323,1.98473338 L15.1423063,1.98702255 C15.8847052,2.03388144 16.4756833,2.62700142 16.5045434,3.37569322 L16.5039338,17.5400105 L10.0002513,14.9434907 L3.49656876,17.5400105 L3.50658906,3.35730619 C3.53356423,2.58088519 4.19517617,1.96122825 4.98420418,1.98451407 L15.0014323,1.98473338 Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
