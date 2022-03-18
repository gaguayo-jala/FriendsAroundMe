import React from 'react';
import {Provider} from 'react-redux';

import RootNavigator from '~navigation/RootNavigator';
import {AppContext} from '~state/AppContext';
import store from '~store/index';
import {AppState} from './App.state';

const App = () => {
  const state = AppState();

  return (
    <Provider store={store}>
      <AppContext.Provider value={state.value}>
        <RootNavigator />
      </AppContext.Provider>
    </Provider>
  );
};

export default App;
