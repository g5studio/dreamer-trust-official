import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

const MobileMenuIcon = (props: ISvgBaseComponentProps) => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 1.86511C0 1.24939 0.407014 0.750244 0.909091 0.750244H19.0909C19.593 0.750244 20 1.24939 20 1.86511C20 2.48083 19.593 2.97997 19.0909 2.97997H0.909091C0.407014 2.97997 0 2.48083 0 1.86511Z"
      class={formatClasses('fill-primary-2', props.fillClasses)}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 9.00012C0 8.3844 0.407014 7.88525 0.909091 7.88525H19.0909C19.593 7.88525 20 8.3844 20 9.00012C20 9.61584 19.593 10.115 19.0909 10.115H0.909091C0.407014 10.115 0 9.61584 0 9.00012Z"
      class={formatClasses('fill-primary-2', props.fillClasses)}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 16.1351C0 15.5194 0.639593 15.0203 1.42857 15.0203H18.5714C19.3604 15.0203 20 15.5194 20 16.1351C20 16.7509 19.3604 17.25 18.5714 17.25H1.42857C0.639593 17.25 0 16.7509 0 16.1351Z"
      class={formatClasses('fill-primary-2', props.fillClasses)}
    />
  </svg>
);
export default MobileMenuIcon;
