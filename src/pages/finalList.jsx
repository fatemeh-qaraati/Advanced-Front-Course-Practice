import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/home/header";
import Footer from "../components/home/footer/index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { STORAGE_USER_ID } from "../constant";

const FinalList = () => {
  const userId = localStorage.getItem(STORAGE_USER_ID);
  const allReservations = useSelector((state) => state.reservations);
  const reservations = allReservations.filter(
    (reservation) => reservation.userId === userId
  );

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex-grow p-6 bg-blue-50">
        <h4 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Reservation List
        </h4>

        {reservations.length === 0 ? (
          <p className="text-gray-600 text-center mt-6">
            No reservations found for your account.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reservations.map((reservation) => (
              <div
                key={reservation.id}
                className="border rounded-lg p-4 shadow-lg bg-white hover:bg-gray-50 transition-all hover:cursor-pointer"
              >
                <h4 className="text-xl font-semibold text-center text-gray-700">
                  {reservation.hotelTitle}
                </h4>

                <div className="flex flex-row gap-5 mt-2">
                  <label className="text-blue-900 text-medium">Check-in:</label>
                  <DatePicker
                    selected={new Date(reservation.checkInDate)}
                    disabled
                  />
                </div>

                <div className="flex flex-row gap-3 mt-2">
                  <label className="text-blue-900 text-medium ">
                    Check-out:
                  </label>
                  <DatePicker
                    selected={new Date(reservation.checkOutDate)}
                    disabled
                  />
                </div>

                <div className="my-2">
                  <label className="pr-6 text-blue-900 text-medium">
                    Adults:
                  </label>
                  <input
                    type="number"
                    value={reservation.adults}
                    disabled
                    className="border border-blue-950 rounded p-1"
                    min={1}
                  />
                </div>

                <div>
                  <label className="pr-3 text-blue-900 text-medium">
                    Children:
                  </label>
                  <input
                    type="number"
                    value={reservation.children}
                    disabled
                    className="border rounded p-1 border-blue-950"
                    min={0}
                  />
                </div>

                <div className="mt-4">
                  <label className="text-blue-900 text-medium">
                    Selected Features:
                  </label>
                  <ul className="list-disc pl-5">
                    {reservation.features.length === 0 ? (
                      <li>No features selected</li>
                    ) : (
                      reservation.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))
                    )}
                  </ul>
                </div>

                <div className="mt-4">
                  <label className="text-blue-900 text-medium">
                    Selected Room:
                  </label>
                  {reservation.rooms.map((room) => (
                    <div
                      key={room.id}
                      className="mt-2 border-2 p-3 rounded cursor-pointer border-blue-900"
                    >
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-[150px] object-cover rounded"
                      />

                      <h5 className="text-medium font-bold text-blue-900">
                        {room.name}
                      </h5>
                      <p className="text-base">{room.description}</p>

                      <div className="flex flex-row gap-3 text-blue-800 mt-2">
                        <p>{room.facilities}</p>
                        <p>
                          <FontAwesomeIcon icon={faBed} /> {room.bed}
                        </p>
                        <p>${room.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FinalList;