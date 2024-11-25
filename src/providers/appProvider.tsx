import React, { useState, createContext, useContext } from "react";
import {
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
  createTheme,
} from "@mui/material";

// Define default light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#ff5722",
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
     
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#ff5722",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

// Create a ThemeContext to manage light/dark mode toggling
type ThemeContextType = {
  toggleTheme: () => void;
  isDarkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeProvider");
  }
  return context;
};

// Define global custom styles
const globalStyles = (
  <GlobalStyles
    styles={{
      "html, body": {
        margin: 0,
        padding: 0,
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "background.default",
      },
      "*": {
        boxSizing: "border-box",
      },
    }}
  />
);

// Create the AppProvider component
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {globalStyles}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { AppProvider, useThemeMode };
