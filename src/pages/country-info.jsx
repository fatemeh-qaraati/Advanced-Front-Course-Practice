import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { COUNTRY_INFO_URL } from "../constant/index.js";
import { Typography } from "@mui/material";
import Loading from "../components/loading/index.jsx";
import CountryInfoCard from "../components/card/country-info-card.jsx";

const CountryInfo = () => {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await fetch(COUNTRY_INFO_URL(cca3));
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountryInfo();
  }, [cca3]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div className="text-center mt-40">
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      </div>
    );
  }
  return <CountryInfoCard country={country} />;
};

export default CountryInfo;