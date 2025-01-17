import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useFetch from "../Hook/useFetch";
import { addRoomAndFeatures } from "../store/actions/reservationActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import Loading from "../components/loading";
import { LOGIN_ROUTE, RESERVATION_LIST_ROUTE } from "../constant/routes.js";
import RoomCard from "../components/RoomCard.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import { STORAGE_LOGIN } from "../constant/index.js";

const RoomSelection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservationInfo = useSelector((state) => state.reservations);
  const latestReservation = Array.isArray(reservationInfo)
    ? reservationInfo[reservationInfo.length - 1]
    : reservationInfo;

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const { data, loading, error } = useFetch("/roomFeatureData.json");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem(STORAGE_LOGIN);
    if (!isLoggedIn) {
      navigate(LOGIN_ROUTE);
    }
  }, [navigate]);

  const handleFeatureChange = (feature) => {
    setSelectedFeatures((prev) => {
      const updatedFeatures = prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature];
      return updatedFeatures;
    });
  };

  const onSubmit = () => {
    if (!selectedRoom) {
      toast.error("Please select a room.");
      return;
    }

    if (selectedFeatures.length === 0) {
      toast.error("Please select at least one feature.");
      return;
    }

    dispatch(
      addRoomAndFeatures({
        reservationId: latestReservation?.id,
        room: selectedRoom,
        features: selectedFeatures,
      })
    );
    toast.success("Room and features selected successfully!");
    navigate(RESERVATION_LIST_ROUTE);
  };

  const isButtonDisabled = !selectedRoom || selectedFeatures.length === 0;

  const hotelData = data?.find(
    (hotel) => hotel.hotel === latestReservation?.hotelTitle
  );

  const featuresData = [
    { name: "Horse Riding", image: "/images/Horse-Riding.jpg" },
    { name: "Spa", image: "/images/Spa.jpg" },
    { name: "City Tour", image: "/images/City-Tour.jpg" },
    { name: "Special Dinner", image: "/images/Special-Dinner.jpg" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="bg-blue-50 flex flex-col items-center p-6">
        <h3 className="text-2xl font-bold text-blue-950 mb-6">
          Select Your Room and Features
        </h3>

        <div>
          <p className="text-blue-900 text-medium">
            Hotel: {latestReservation?.hotelTitle || "Not Available"}
          </p>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          {loading && (
            <Loading isLoading={loading}>
              <p>loading room...</p>
            </Loading>
          )}
          {error && <p className="text-red-500">Failed to load room data.</p>}

          {!loading && !hotelData && (
            <p className="text-gray-700">No rooms available for this hotel.</p>
          )}

          {hotelData?.rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              selectedRoom={selectedRoom}
              onSelect={setSelectedRoom}
            />
          ))}
        </div>

        <h4 className="text-xl font-semibold mb-4 mt-6 text-blue-900">
          Features
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.name}
              feature={feature}
              selectedFeatures={selectedFeatures}
              onToggle={handleFeatureChange}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onSubmit}
          className={`mt-6 py-2 px-4 rounded text-white text-base ${
            isButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-900 hover:bg-blue-700"
          }`}
          disabled={isButtonDisabled}
        >
          Next Step
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default RoomSelection;