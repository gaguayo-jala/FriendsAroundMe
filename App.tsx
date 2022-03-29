import React from 'react';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {MenuProvider} from 'react-native-popup-menu';

import RootNavigator from '~navigation/RootNavigator';
import {AppContext} from '~state/AppContext';
import store from '~store/index';
import {AppState} from './App.state';

LogBox.ignoreLogs(['react-native-gesture-handler']);

const App = () => {
  const state = AppState();

  return (
    <Provider store={store}>
      <MenuProvider>
        <AppContext.Provider value={state.value}>
          <RootNavigator />
        </AppContext.Provider>
      </MenuProvider>
    </Provider>
  );
};

export default App;
