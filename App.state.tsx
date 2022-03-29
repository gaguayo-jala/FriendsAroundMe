import {useState, ProviderProps} from 'react';
import User from '~models/user';
import {AppContextProps} from '~state/AppContext';
import {cleanAll} from '~store/secure-store';

export const AppState = (): ProviderProps<AppContextProps> => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  const value = {
    isLoading,
    isAuthenticated,
    setIsLoading,
    user,
    logout: () => {
      setIsAuthenticated(false);
      cleanAll();
    },
    login: (userInfo: User) => {
      setUser(userInfo);
      setIsAuthenticated(true);
    },
  };

  return {value};
};
