import React from 'react';
import { ThemeProvider } from "theme-ui";

const Theme = ({children, theme}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;