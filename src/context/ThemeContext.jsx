import { React, createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const data = { darkMode, toggleDarkMode };
  
  return <ThemeProvider value={data}>{children}</ThemeProvider>;
};

export { ThemeProvider };
export default ThemeContext;
