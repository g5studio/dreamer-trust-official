import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IFooterProps extends IBaseComponentProps {}

/**
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=10-163&t=07yOjK1cv3rWFOE6-4
 */
const Footer = (props: IFooterProps) => (
  <footer data-testid="app-footer" class={formatClasses('shadow-footer px-26 py-18_5', props.classes)}>
    <section class={formatClasses('main-container box-border flex h-full w-full flex-row')}>test</section>
  </footer>
);
export default Footer;
