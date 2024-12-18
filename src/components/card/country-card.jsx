import React from "react";
import { Link} from "react-router";

const CountryCard = ({ country }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg shadow-md bg-white border hover:bg-gray-100 transition">
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="w-20 h-12 object-cover rounded"
      />
      <Link
        to={`/country/${country.cca3}`}
        className="text-base font-semibold text-blue-600 hover:underline"
      >
        {country.name.common}
      </Link>
    </div>
  );
};

export default CountryCard;