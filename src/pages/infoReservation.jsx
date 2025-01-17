import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addReservation } from "../store/actions/reservationActions.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import { useNavigate } from "react-router";
import { ROOM_FEATURE_ROUTE, LOGIN_ROUTE } from "../constant/routes.js";
import { STORAGE_LOGIN, STORAGE_USER_ID } from "../constant/index.js";

const ReservationInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const isLoggedIn = localStorage.getItem(STORAGE_LOGIN) === "true";
  const userId = localStorage.getItem(STORAGE_USER_ID);

  const schema = yup.object().shape({
    hotelTitle: yup.string().required("Please select a hotel"),

    checkInDate: yup
      .date()
      .nullable()
      .typeError("Check-in date is required")
      .required("Check-in date is required"),

    checkOutDate: yup
      .date()
      .nullable()
      .typeError("Check-out date is required")
      .required("Check-out date is required")
      .when("checkInDate", (checkInDate, schema) =>
        schema.min(checkInDate, "Check-out date must be after check-in date")
      ),

    adults: yup
      .number()
      .required()
      .typeError("Please enter a valid number.")
      .min(1, "At least 1 adult is required.")
      .max(12, "A maximum of 12 adults is allowed."),

    children: yup
      .number()
      .typeError("Please enter a valid number.")
      .min(0, "Number of children can't be negative.")
      .max(5, "A maximum of 5 children is allowed."),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const generateId = () => {
    return `reservation-${Math.floor(Math.random() * 1000000)}`;
  };

  const onSubmit = (data) => {
    if (!isLoggedIn) {
      toast.error("You must be logged in to access next page.");
      navigate(LOGIN_ROUTE);
      return;
    }

    try {
      const uniqueId = generateId();
      dispatch(
        addReservation({
          ...data,
          checkInDate,
          checkOutDate,
          id: uniqueId,
          userId: userId,
        })
      );
      toast.success("Your information was successfully registered!");
      navigate(ROOM_FEATURE_ROUTE);
    } catch (error) {
      toast.error(error.message || "Registration failed! Please try again.");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="bg-blue-50 flex flex-col items-center">
        <h3 className="text-2xl font-bold my-4 text-blue-950">
          Hotel Reservation
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-4 md:mb-3"
        >
          <div>
            <label className="block mb-2">Select a Hotel</label>
            <select
              {...register("hotelTitle")}
              className={`w-full p-2 border rounded ${
                errors.hotelTitle ? "border-blue-400" : "border-gray-300"
              }`}
            >
              <option value="">Select</option>
              <option value="Hotel Sunshine">Hotel Sunshine</option>
              <option value="Golden Woodland Hotel">
                Golden Woodland Hotel
              </option>
              <option value="Seaside Escape">Seaside Escape</option>
              <option value="Coastal Luxe">Coastal Luxe</option>
            </select>

            {errors.hotelTitle && (
              <p className="text-red-400 text-sm mt-1">
                {errors.hotelTitle.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-2">Check-in Date</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => {
                setCheckInDate(date);
                setValue("checkInDate", date);
              }}
              className="w-full p-2 border rounded border-gray-300"
              minDate={new Date()}
              maxDate={
                new Date(new Date().setFullYear(new Date().getFullYear() + 1))
              }
            />
            {errors.checkInDate && (
              <p className="text-red-400 text-sm mt-1">
                {errors.checkInDate.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-2">Check-out Date</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => {
                setCheckOutDate(date);
                setValue("checkOutDate", date);
              }}
              className="w-full p-2 border rounded border-gray-300"
              minDate={checkInDate || new Date()}
              maxDate={
                new Date(new Date().setFullYear(new Date().getFullYear() + 1))
              }
            />
            {errors.checkOutDate && (
              <p className="text-red-400 text-sm mt-1">
                {errors.checkOutDate.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-2">Adults</label>
            <input
              type="number"
              {...register("adults")}
              className={`w-full p-2 border rounded ${
                errors.adults ? "border-blue-400" : "border-gray-300"
              }`}
            />
            {errors.adults && (
              <p className="text-red-400 text-sm mt-1">
                {errors.adults.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-2">Children</label>
            <input
              type="number"
              {...register("children")}
              className={`w-full p-2 border rounded ${
                errors.children ? "border-blue-400" : "border-gray-300"
              }`}
            />
            {errors.children && (
              <p className="text-red-400 text-sm mt-1">
                {errors.children.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-900 text-white py-2 rounded hover:bg-blue-700"
          >
            Next Step
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ReservationInfo;