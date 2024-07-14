import OverlayContainer from '@modules/common/components/OverlayContainer';
import NoInfo from '@shared/components/NoInfo';
import { Component } from 'solid-js';
import 'styles/_index.scss';

const App: Component = () => {
  return (
    <>
      <NoInfo />
      <OverlayContainer />
    </>
  );
};

export default App;
