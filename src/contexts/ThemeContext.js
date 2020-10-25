import React from 'react';

export const colors = {
  primary: 'blue',
  secondary: 'red',
};

const ThemeContext = React.createContext({
  theme: colors.primary,
  setTheme: () => {},
});

export default ThemeContext;
