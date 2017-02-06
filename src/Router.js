import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Confirm from './components/Confirm';
import ThankYou from './components/ThankYou';

const RouterComponent = () => {
  return (
    <Router style={{ paddingTop: 65 }}>
    <Scene key="root">
    <Scene key="modal" component={Confirm} initial />
    <Scene key="thankYou" component={ThankYou} title="Thank You!" />
    </Scene>
    </Router>
  );
};

export default RouterComponent;