import { createContext, useState, useContext } from "react";

// Create context
const ThemeContext = createContext();

// Export this so we can use theme anywhere
export const useTheme = () => useContext(ThemeContext);

// Provider to wrap the whole app
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
