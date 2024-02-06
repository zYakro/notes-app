import React, { useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../Themes/theme';
import { base } from '../Themes/base';
import { UserInfoContext } from '@/context/UserInfo/UserInfoContext';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { userInfo } = useContext(UserInfoContext)

  const themes = {
    'main-theme': {...base, ...theme}
  }

  return (
    <StyledThemeProvider theme={themes[userInfo.theme]}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;