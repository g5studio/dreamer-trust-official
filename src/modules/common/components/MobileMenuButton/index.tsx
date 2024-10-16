import DropdownContainer from '@shared/components/DropdownContainer';
import { Page } from '@shared/enums';
import { useMenu } from '@shared/hooks/use-menu';
import { translate } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getRouteConfigByKey } from '@utilities/helpers/routes.helper';
import { CancelIcon } from '@utilities/svg-components/CancelIcon';
import MobileMenuIcon from '@utilities/svg-components/shared/MobileMenuIcon';
import { Show } from 'solid-js';

interface IMobileMenuButtonProps extends IBaseComponentProps {}

const MobileMenuButton = (props: IMobileMenuButtonProps) => {
  const { menuItems } = useMenu();
  return (
    <DropdownContainer<Page>
      classes={formatClasses(props.classes)}
      testId={props.testId}
      triggerSlot={({ toggleDropdown, isOpen }) => (
        <button onClick={toggleDropdown} type="button">
          <Show when={!isOpen()} fallback={<CancelIcon fillClasses="fill-primary-2" />}>
            <MobileMenuIcon />
          </Show>
        </button>
      )}
      align="right"
      itemList={menuItems().map((e) => e.key)}
      childrenContainerClasses={'bg-layer-3 shadow mt-4_25 rounded-md px-6 py-4 space-y-6 bg-black-8'}
      itemSlot={({ item }) => translate(getRouteConfigByKey(item)?.i18n)}
    />
  );
};
export default MobileMenuButton;
