import React from "react";
import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import {
  CONTACT_ROUTE,
  FINAL_LIST_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  RESERVATION_FORM_ROUTE,
  RESERVATION_LIST_ROUTE,
  RESERVATION_STATUS_ROUTE,
  ROOM_FEATURE_ROUTE,
  SIGN_UP_ROUTE,
} from "./constant/routes";
import HomePage from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import FinalList from "./pages/finalList";
import ReservationInfo from "./pages/infoReservation";
import RoomSelection from "./pages/roomReservation";
import NotFound404 from "./pages/notFound";
import ReservationList from "./pages/listReservation";
import ReservationStatus from "./pages/statusReservation";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ContactUS from "./pages/contactUs.jsx";

const App = () => {
  return (
    <div>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={SIGN_UP_ROUTE} element={<SignUp />} />
        <Route path={CONTACT_ROUTE} element={<ContactUS />} />
        <Route path={RESERVATION_FORM_ROUTE} element={<ReservationInfo />} />
        <Route path={ROOM_FEATURE_ROUTE} element={<RoomSelection />} />
        <Route
          path={RESERVATION_LIST_ROUTE}
          element={
            <PrivateRoute>
              <ReservationList />
            </PrivateRoute>
          }
        />
        <Route
          path={RESERVATION_STATUS_ROUTE}
          element={
            <PrivateRoute>
              <ReservationStatus />
            </PrivateRoute>
          }
        />
        <Route
          path={FINAL_LIST_ROUTE}
          element={
            <PrivateRoute>
              <FinalList />
            </PrivateRoute>
          }
        />
        <Route path={NOT_FOUND_ROUTE} element={<NotFound404 />} />
      </Routes>
    </div>
  );
};

export default App;