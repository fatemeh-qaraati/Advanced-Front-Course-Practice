import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import { DarkMode, Menu, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Home, Book, PersonAdd } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import LoginIcon from "@mui/icons-material/Login";
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  RESERVATION_FORM_ROUTE,
  SIGN_UP_ROUTE,
} from "../../../constant/routes.js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { to: HOME_ROUTE, label: "Home", icon: <Home /> },
    { to: RESERVATION_FORM_ROUTE, label: "Booking", icon: <Book /> },
    { to: CONTACT_ROUTE, label: "Contact", icon: <PhoneIcon /> },
    { to: LOGIN_ROUTE, label: "Log in", icon: <LoginIcon /> },
    { to: SIGN_UP_ROUTE, label: "Sign up", icon: <PersonAdd /> },
  ];

  return (
    <header className="bg-white text-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className=" h-16 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="./images/logo.jpg"
              alt="Hotel Logo"
              className="w-10 h-10 rounded-full hover:scale-110 transition-transform duration-200 cursor-pointer"
            />
            <h1 className="text-xl font-bold">Luxe Haven</h1>
          </div>

          <div className="block sm:hidden">
            <IconButton onClick={toggleMenu} color="inherit">
              {isMenuOpen ? <Close /> : <Menu />}
            </IconButton>
          </div>

          <nav className="hidden sm:flex space-x-6">
            <Link to={HOME_ROUTE} className="hover:text-blue-700">
              Home
            </Link>
            <Link to={RESERVATION_FORM_ROUTE} className="hover:text-blue-700">
              Booking
            </Link>
            <Link to={CONTACT_ROUTE} className="hover:text-blue-700">
              Contact
            </Link>
          </nav>

          <div className="hidden space-x-4 sm:flex items-center">
            <Button
              component={Link}
              to={LOGIN_ROUTE}
              variant="outlined"
              color="inherit"
              size="small"
              sx={{ "&:hover": { backgroundColor: "#D9EAFD" } }}
            >
              Log in
            </Button>

            <Button
              component={Link}
              to={SIGN_UP_ROUTE}
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#001A6E",
                "&:hover": { backgroundColor: "#000A4A" },
              }}
            >
              Sign up
            </Button>

            <IconButton
              color="inherit"
              className="bg-gray-100 rounded-full p-2"
            >
              <DarkMode />
            </IconButton>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            style={{ backgroundColor: "#000B58" }}
            className="sm:hidden text-white p-2"
          >
            <div className="flex flex-col items-center space-y-3 text-sm">
              {links.map(({ to, label, icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={toggleMenu}
                  className="flex items-center space-x-1 w-20"
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              ))}

              <IconButton
                color="inherit"
                className="bg-gray-100 rounded-full p-2"
              >
                <DarkMode />
              </IconButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;