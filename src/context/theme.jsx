import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themes = {
    light: {
      background: "#f4f4f4",
      text: "#0d1b2a",
    },
    dark: {
      background: "#0d1b2a",
      text: "#ffffff",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, ...themes[theme] }}>
      <div
        style={{
          background: themes[theme].background,
          color: themes[theme].text,
          minHeight: "100vh",
          transition: "0.1s",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);