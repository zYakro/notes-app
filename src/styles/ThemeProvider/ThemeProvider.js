import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../Themes/theme';
import { base } from '../Themes/base';

const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={{...base, ...theme}}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;