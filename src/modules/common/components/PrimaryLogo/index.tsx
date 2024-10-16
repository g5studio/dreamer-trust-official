import Picture from '@shared/components/Picture';
import { LocaleDash, Page } from '@shared/enums';
import { useNavigate } from '@shared/hooks/use-navigate';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IPrimaryLogoProps extends IBaseComponentProps {}

const PrimaryLogo = (props: IPrimaryLogoProps) => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate()[Page.Home]()}>
      <Picture classes={formatClasses(props.classes)} src={`common/logo_${LocaleDash.en_US}.png`} />
    </button>
  );
};
export default PrimaryLogo;
