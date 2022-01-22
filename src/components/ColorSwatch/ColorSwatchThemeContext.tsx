import * as React from 'react';

type ThemeType = {
  [key: string]: React.CSSProperties;
};

const defaultTheme: ThemeType = {
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: '#555',
    color: 'white'
  }
};

export const ColorSwatchThemeContext = React.createContext(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ColorSwatchThemeContext.Provider value={defaultTheme}>
      {children}
    </ColorSwatchThemeContext.Provider>
  );
};
