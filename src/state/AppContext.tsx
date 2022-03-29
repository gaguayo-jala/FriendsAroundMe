import {createContext} from 'react';
import User from '~models/user';

export type AppContextProps = {
  isLoading: boolean;
  isAuthenticated?: undefined | boolean;
  login: (user: User) => void;
  logout: () => void;
  setIsLoading: (loading: boolean) => void;
  user?: User | undefined;
};

export const AppContext = createContext<AppContextProps>({
  isLoading: false,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  setIsLoading: () => {},
  user: undefined,
});
