import React from "react";
import {useTheme} from "../../context/theme.jsx";


const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-600 mb-8 px-4 py-3 text-white rounded"
    >
      Switch to {darkTheme ? "Light" : "Dark"} Theme
    </button>
  );
};

export default ThemeToggle;