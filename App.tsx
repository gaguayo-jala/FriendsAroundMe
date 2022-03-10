import React, {useState} from 'react';
import RootNavigator from '~navigation/RootNavigator';
import {AppContext} from '~state/AppContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        logout: () => {
          setIsAuthenticated(false);
        },
        login: function () {
          setIsAuthenticated(true);
        },
      }}>
      <RootNavigator />
    </AppContext.Provider>
  );
};

export default App;
