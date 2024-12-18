import React from "react";
import { NavLink } from "react-router";
import { ROUTES } from "../../constant/routes";
import { useTheme } from "../../context/theme.jsx";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`p-5 ${
        theme === "light" ? "bg-blue-600" : "bg-blue-950"
      } text-white flex justify-between items-center`}
    >
      <h1 className="text-2xl font-bold">Countries App</h1>
      <div>
        <NavLink
          to={ROUTES.HOME}
          className="mr-3 hover:underline underline-offset-4"
        >
          Home
        </NavLink>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded ${
            theme === "light" ? "bg-blue-950 text-white" : "bg-blue-800"
          }`}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default Header;