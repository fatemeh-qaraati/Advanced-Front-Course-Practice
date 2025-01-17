import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import {
  editReservation,
  removeReservation,
} from "../store/actions/reservationActions";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { RESERVATION_STATUS_ROUTE } from "../constant/routes";
import { STORAGE_USER_ID } from "../constant";

const ReservationList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem(STORAGE_USER_ID);
  const allReservations = useSelector((state) => state.reservations);
  const reservations = allReservations.filter(
    (reservation) => reservation.userId === userId
  );
  const [editReservations, setEditReservations] = useState(reservations);

  const handleDateChange = (id, field, date) => {
    setEditReservations((prev) =>
      prev.map((reservation) =>
        reservation.id === id ? { ...reservation, [field]: date } : reservation
      )
    );
  };

  const handleInputChange = (id, field, value) => {
    setEditReservations((prev) =>
      prev.map((reservation) =>
        reservation.id === id ? { ...reservation, [field]: value } : reservation
      )
    );
  };

  const handleFeatureChange = (id, feature) => {
    setEditReservations((prev) =>
      prev.map((reservation) =>
        reservation.id === id
          ? {
              ...reservation,
              features: reservation.features.includes(feature)
                ? reservation.features.filter((item) => item !== feature)
                : [...reservation.features, feature],
            }
          : reservation
      )
    );
  };

  const handleSaveChanges = () => {
    try {
      const isSaveSuccessful = editReservations.every((reservation) => {
        const result = dispatch(editReservation(reservation));
        return result;
      });

      navigate(RESERVATION_STATUS_ROUTE, {
        state: { success: isSaveSuccessful },
      });
      toast.success("Changes saved and submit successfully!");
    } catch (error) {
      navigate(RESERVATION_STATUS_ROUTE, { state: { success: false } });
      toast.error("An error occurred while saving changes.");
    }
  };

  const handleDelete = (id) => {
    dispatch(removeReservation(id));
    toast.success("Reservation deleted successfully!");
  };

  const Features = ["Horse Riding", "Spa", "City Tour", "Special Dinner"];

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex-grow p-4 bg-blue-50">
        <h3 className="text-2xl font-bold text-blue-950 mb-4 text-center">
          Reservation List
        </h3>

        {reservations.length === 0 ? (
          <p className="text-gray-600 text-center">
            No reservations found for your account.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {editReservations.map((reservation) => (
              <div
                key={reservation.id}
                className="border rounded-lg p-4 shadow-lg bg-white"
              >
                <h4 className="text-xl font-bold text-center text-gray-700">
                  {reservation.hotelTitle}
                </h4>
                <div className="flex flex-row gap-5 mt-2">
                  <label className="text-blue-900 text-medium">Check-in:</label>
                  <DatePicker
                    selected={new Date(reservation.checkInDate)}
                    onChange={(date) =>
                      handleDateChange(reservation.id, "checkInDate", date)
                    }
                    minDate={new Date()}
                    maxDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() + 1)
                      )
                    }
                  />
                </div>

                <div className="flex flex-row gap-3 mt-2">
                  <label className="text-blue-900 text-medium">
                    Check-out:
                  </label>
                  <DatePicker
                    selected={new Date(reservation.checkOutDate)}
                    onChange={(date) =>
                      handleDateChange(reservation.id, "checkOutDate", date)
                    }
                    minDate={new Date(reservation.checkInDate)}
                    maxDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() + 1)
                      )
                    }
                  />
                </div>

                <div className="my-2">
                  <label className="pr-6 text-blue-900 text-medium">
                    Adults:
                  </label>
                  <input
                    type="number"
                    value={reservation.adults}
                    onChange={(e) =>
                      handleInputChange(
                        reservation.id,
                        "adults",
                        e.target.value
                      )
                    }
                    className="border border-blue-800 rounded p-1"
                    min={1}
                  />
                </div>

                <label className="pr-3 text-blue-900 text-medium">
                  Children:
                </label>
                <input
                  type="number"
                  value={reservation.children}
                  onChange={(e) =>
                    handleInputChange(
                      reservation.id,
                      "children",
                      e.target.value
                    )
                  }
                  className="border border-blue-800 rounded p-1"
                  min={0}
                />

                <div>
                  <label className=" text-blue-900 text-medium">
                    Features:
                  </label>
                  {Features.map((feature) => (
                    <div key={feature}>
                      <label>
                        <input
                          type="checkbox"
                          checked={reservation.features.includes(feature)}
                          onChange={() =>
                            handleFeatureChange(reservation.id, feature)
                          }
                        />
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>

                <h4 className="text-medium mt-1 text-blue-900">Room:</h4>
                {reservation.rooms.map((room) => (
                  <div
                    key={room.id}
                    className="mt-2 border-2 p-3 rounded cursor-pointer border-blue-800"
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-[150px] object-cover rounded"
                    />
                    <h5 className="text-medium font-bold mt-2 text-blue-900">
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

                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => handleDelete(reservation.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex space-x-4 align-middle justify-center">
          <button
            onClick={handleSaveChanges}
            className="bg-green-500 px-6 py-2 rounded text-white hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReservationList;