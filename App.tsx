import React from 'react';
import RootNavigator from '~navigation/RootNavigator';
import {AppContext} from '~state/AppContext';
import {AppState} from './App.state';

const App = () => {
  const state = AppState();

  return (
    <AppContext.Provider value={state.value}>
      <RootNavigator />
    </AppContext.Provider>
  );
};

export default App;
