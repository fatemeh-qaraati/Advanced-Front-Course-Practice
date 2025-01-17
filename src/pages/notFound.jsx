import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/home/header/index.jsx";
import Footer from "./../components/home/footer/index.jsx";
import { HOME_ROUTE } from "../constant/routes.js";

const NotFound404 = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center text-center bg-gray-100">
        <img
          src="./images/notFoundPage.jpg"
          alt="Not Found"
          className="w-1/2 h-1/2 mt-2 object-cover rounded-lg mb-3"
        />

        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            The page you’re looking for doesn’t exist. It might have been
            removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <Link
          to={HOME_ROUTE}
          className="px-4 mb-6 py-2 bg-blue-900 text-white font-small rounded-md shadow-lg hover:bg-blue-800"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound404;