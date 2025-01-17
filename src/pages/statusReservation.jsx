import React from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { HOME_ROUTE, FINAL_LIST_ROUTE } from "../constant/routes.js";

const ReservationStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reservationSuccess = location.state?.success || false;

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex-grow p-6 bg-blue-50 flex flex-col items-center justify-center">
        {reservationSuccess ? (
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600 mb-4 flex flex-row gap-3 justify-center">
              <FaCheckCircle className="text-4xl" />
              Reservation Successful!
            </p>

            <p className="text-lg text-gray-700">
              Your reservation has been successfully completed. Thank you for
              choosing our service! We will email you the information.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600 mb-4 flex flex-row gap-3 justify-center">
              <FaTimesCircle className="text-4xl text-red-600" />
              Reservation Failed.
            </p>

            <p className="text-lg text-gray-700">
              Unfortunately, your reservation could not be completed. Please try
              again later.
            </p>
          </div>
        )}

        <div className="flex space-x-6 mt-6">
          <button
            onClick={() => navigate(HOME_ROUTE)}
            className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Go to Home
          </button>

          <button
            onClick={() => navigate(FINAL_LIST_ROUTE)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800"
          >
            View Reservations
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReservationStatus;