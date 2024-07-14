import { createSignal } from 'solid-js';
import Collapse from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Collapse> = {
  component: Collapse,
};

export default meta;

type Story = StoryObj<typeof Collapse>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const DefaultExpand: Story = {
  render: () => {
    const header = <div>Header</div>;
    const headerStyle = 'px-2_5';

    return (
      <Collapse testId="Collapse" defaultExpand={true} headerSlot={() => header} headerClass={headerStyle}>
        <div class="w-full flex flex-col">
          <span>王小明</span>
          <span>年紀：21歲</span>
          <span>職業：學生</span>
        </div>
      </Collapse>
    );
  },
};

export const Expand: Story = {
  render: () => {
    const header = <div>Header</div>;
    const headerStyle = 'px-2_5';

    return (
      <Collapse
        testId="Collapse"
        isExpand={true}
        defaultExpand={true}
        headerSlot={() => header}
        headerClass={headerStyle}>
        <div class="w-full flex flex-col">
          <span>王小明</span>
          <span>年紀：21歲</span>
          <span>職業：學生</span>
        </div>
      </Collapse>
    );
  },
};

export const NoExpand: Story = {
  render: () => {
    const header = <div>Header</div>;
    const headerStyle = 'px-2_5';

    return (
      <Collapse
        testId="Collapse"
        isExpand={false}
        defaultExpand={true}
        headerSlot={() => header}
        headerClass={headerStyle}>
        <div class="w-full flex flex-col">
          <span>王小明</span>
          <span>年紀：21歲</span>
          <span>職業：學生</span>
        </div>
      </Collapse>
    );
  },
};

export const UseArrow: Story = {
  render: () => {
    const header = <div>Header</div>;
    const headerStyle = 'px-2_5';

    return (
      <Collapse
        testId="Collapse"
        isExpand={true}
        defaultExpand={true}
        headerSlot={() => header}
        headerClass={headerStyle}
        arrowIcon={true}>
        <div class="w-full flex flex-col">
          <span>王小明</span>
          <span>年紀：21歲</span>
          <span>職業：學生</span>
        </div>
      </Collapse>
    );
  },
};

export const NoArrow: Story = {
  render: () => {
    const header = <div>Header</div>;
    const headerStyle = 'px-2_5';

    return (
      <Collapse
        testId="Collapse"
        isExpand={true}
        defaultExpand={true}
        headerSlot={() => header}
        headerClass={headerStyle}>
        <div class="w-full flex flex-col">
          <span>王小明</span>
          <span>年紀：21歲</span>
          <span>職業：學生</span>
        </div>
      </Collapse>
    );
  },
};

export const Toggle: Story = {
  render: () => {
    const headerStyle = 'px-2_5';

    const [nowState, setNowState] = createSignal<boolean>(true);

    const header = <div>Header, now state is {nowState().toString()}</div>;

    const toggle = (state: boolean) => {
      setNowState(state);
    };

    return (
      <Collapse
        testId="Collapse"
        isExpand={true}
        defaultExpand={true}
        headerSlot={() => header}
        headerClass={headerStyle}
        onToggle={toggle}>
        <div class="w-full flex flex-col">
          <span>王小明</span>
          <span>年紀：21歲</span>
          <span>職業：學生</span>
        </div>
      </Collapse>
    );
  },
};
