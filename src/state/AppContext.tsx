import {createContext} from 'react';

export type AppContextProps = {
  isAuthenticated?: undefined | boolean;
  login: () => void;
  logout: () => void;
};

export const AppContext = createContext<AppContextProps>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});
