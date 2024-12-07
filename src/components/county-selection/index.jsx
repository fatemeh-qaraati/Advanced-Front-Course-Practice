import React from "react";
import PropTypes from "prop-types";

const CountySelection = ({ counties, register, error, isDisabled }) => (
  <div className="mb-5">
    <label
      htmlFor="county"
      className="block mb-3 text-xl text-gray-700 font-medium"
    >
      شهرستان
    </label>

    <select
      id="county"
      {...register("county")}
      disabled={isDisabled}
      className={`w-full border rounded-lg p-3 focus:ring-1 focus:ring-rose-500 ${
        error ? "border-rose-500" : "border-gray-400"
      }`}
    >
      <option value="">یک مورد انتخاب کنید</option>
      {counties.map((county) => (
        <option key={county} value={county}>
          {county}
        </option>
      ))}
    </select>
    {error && <p className="text-rose-600 mt-1 text-lg">{error.message}</p>}
  </div>
);

CountySelection.propTypes = {
  counties: PropTypes.object.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.string,
};

export default CountySelection;