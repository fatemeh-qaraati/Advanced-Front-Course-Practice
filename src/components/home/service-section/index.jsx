import React from "react";
import {
  FaSwimmingPool,
  FaUtensils,
  FaSpa,
  FaWifi,
  FaDumbbell,
  FaCar,
  FaConciergeBell,
} from "react-icons/fa";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";

const services = [
  { id: 1, icon: <FaSwimmingPool size={36} />, label: "Swimming Pool" },
  { id: 2, icon: <FaUtensils size={36} />, label: "Restaurant" },
  { id: 3, icon: <FaSpa size={36} />, label: "Spa" },
  { id: 4, icon: <FaWifi size={36} />, label: "Free Wi-Fi" },
  { id: 5, icon: <FaDumbbell size={36} />, label: "Gym" },
  { id: 6, icon: <FaCar size={36} />, label: "Parking" },
  { id: 7, icon: <FaConciergeBell size={36} />, label: "Concierge" },
  {
    id: 8,
    icon: <LocalLaundryServiceIcon fontSize="large" />,
    label: "laundry",
  },
];

const HotelServices = () => {
  return (
    <section id="service-section" className="py-4">
      <h3 className="text-3xl font-bold text-blue-950 text-center mb-8">
        hotel Services
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto place-items-center mb-4">
        {services.map((service) => (
          <div
            key={service.id}
            style={{ "backgroundColor": "#F2F9FF" }}
            className="flex flex-col items-center justify-center w-32 h-32 p-4 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 md:h-40 md:w-40"
          >
            <div className="text-blue-900 mb-2">{service.icon}</div>
            <p className="text-sm font-medium text-gray-700 text-center">
              {service.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelServices;