import React, { useState } from "react";
import { Link } from "react-router";
import useFetch from "../../../Hook/useFetch.js";
import { FaSearch } from "react-icons/fa";
import Loading from "../../loading/index.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { RESERVATION_FORM_ROUTE } from "../../../constant/routes.js";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [memberCount, setMemberCount] = useState(0);

  const { data: slides, loading, error } = useFetch("/sliderData.json");

  const handleMemberChange = (value) => {
    setMemberCount((prev) => Math.min(10, Math.max(0, prev + value)));
  };

  if (loading) {
    return (
      <Loading isLoading={loading}>
        <p>Hero section is loading...</p>
      </Loading>
    );
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <section className="relative w-[80%] mx-auto h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden mt-4 rounded-3xl">
      {slides.length > 0 ? (
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="flex h-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  minHeight: "100%",
                }}
                aria-label={slide.alt}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-blue-900">
          Loading Slider...
        </div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black bg-opacity-50 md:px-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
          Enjoy your Dream Vacation
        </h2>

        <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6">
          Plan your next trip with exclusive deals and comfortable stays.
        </p>

        <div className="flex space-x-2 md:space-x-4">
          <Link
            to={RESERVATION_FORM_ROUTE}
            className="px-4 py-2 md:px-6 md:py-3 bg-blue-950 border text-white rounded-md shadow-md hover:bg-indigo-800 text-sm md:text-base"
          >
            Book Now
          </Link>

          <button className="px-4 py-2 md:px-6 md:py-3 border text-white rounded-md shadow-md  hover:bg-indigo-400 hover:text-blue-950 text-sm md:text-base">
            Explore More
          </button>
        </div>
      </div>

      <div className=" hidden sm:flex absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg p-4 items-center space-x-2 max-w-[1200px] md:w-[80%] lg:w-[70%]">
        <div className="flex flex-col w-1/4">
          <label className="text-xs mb-2 md:text-sm font-semibold">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter location"
            className="border rounded px-2 py-1 text-xs md:text-sm w-full"
          />
        </div>

        <div className="flex flex-col w-1/4">
          <label className="text-xs mb-2 md:text-sm font-semibold">
            Check In
          </label>
          <input
            type="date"
            className="border rounded px-2 py-1 text-xs md:text-sm w-full"
          />
        </div>

        <div className="flex flex-col w-1/4">
          <label className="text-xs mb-2 md:text-sm font-semibold">
            Check Out
          </label>
          <input
            type="date"
            className="border rounded px-2 py-1 text-xs md:text-sm w-full"
          />
        </div>

        <div className="flex flex-col w-1/4 md:w-1/3 lg:w-1/4">
          <label className="text-xs ml-4 mb-2 md:text-sm font-semibold">
            Members
          </label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleMemberChange(-1)}
              disabled={memberCount === 0}
              className="w-6 h-6 ml-4 bg-indigo-200 rounded-full flex items-center justify-center disabled:opacity-50 md:w-8 md:h-8"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="text-sm">{memberCount}</span>
            <button
              onClick={() => handleMemberChange(1)}
              disabled={memberCount === 10}
              className="w-6 h-6 bg-indigo-200 rounded-full flex items-center justify-center disabled:opacity-50 md:w-8 md:h-8"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        <button className="w-8 h-8 bg-blue-950 text-white rounded-full flex items-center justify-center hover:bg-blue-900 md:w-10 md:h-10 mt-4 lg:mt-0">
          <FaSearch />
        </button>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === currentSlide ? "bg-blue-800" : "bg-gray-200"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;