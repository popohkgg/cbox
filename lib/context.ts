import { createContext } from 'react';

interface IAuthContext {
  token: string;
  origin: string;
  getLoginUrl: (origin: string) => string;
}

export function getLoginUrl(origin: string) {
  return `/api/oauth/authorize?redirect_uri=${encodeURIComponent(origin)}`;
}

export const AuthContext = createContext<IAuthContext>({
  token: '',
  origin: '',
  getLoginUrl,
});

interface IThemeContext {
  theme: string;
  setTheme?: (theme: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: '',
});
