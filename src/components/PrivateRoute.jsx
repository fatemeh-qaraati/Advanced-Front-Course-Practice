import React from "react";
import { Navigate } from "react-router";
import { LOGIN_ROUTE } from "../constant/routes";
import { STORAGE_LOGIN } from "../constant";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem(STORAGE_LOGIN);

  return isLoggedIn ? children : <Navigate to={LOGIN_ROUTE} />;
};

export default PrivateRoute;