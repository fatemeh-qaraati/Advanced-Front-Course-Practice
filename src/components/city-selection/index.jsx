import React from "react";
import PropTypes from "prop-types";

const CitySelection = ({ cities, register, error }) => (
  <div className="mb-5">
    <label
      htmlFor="city"
      className="block mb-3 text-xl text-gray-700 font-medium"
    >
      شهر
    </label>

    <select
      id="city"
      {...register("city")}
      className={`w-full border rounded-lg p-3 focus:ring-1 focus:ring-rose-500 ${
        error ? "border-rose-500" : "border-gray-400"
      }`}
    >
      <option value="">یک شهر را انتخاب کنید</option>
      {Object.keys(cities).map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
    {error && <p className="text-rose-600 mt-1 text-lg">{error.message}</p>}
  </div>
);

CitySelection.propTypes = {
  cities: PropTypes.object.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.string,
};

export default CitySelection;