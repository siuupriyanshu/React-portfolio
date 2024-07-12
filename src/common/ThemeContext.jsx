import React, { createContext, useContext, useEffect, useState } from "react";

// Create a ThemeContext with a default value
const ThemeContext = createContext({
  theme: 'light', // Default value
  toggleTheme: () => {}, // Dummy function as default
});

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
