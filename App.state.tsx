import {useState, ProviderProps} from 'react';
import {AppContextProps} from '~state/AppContext';
import {cleanAll} from '~store/secure-store';

export const AppState = (): ProviderProps<AppContextProps> => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const value = {
    isLoading,
    isAuthenticated,
    setIsLoading,
    logout: () => {
      setIsAuthenticated(false);
      cleanAll();
    },
    login: function () {
      setIsAuthenticated(true);
    },
  };

  return {value};
};
