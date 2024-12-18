import React from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router";
import { ROUTES } from "../../constant/routes";

const CountryInfoCard = ({ country }) => {
  return (
    <div className="flex justify-center items-center mt-11 h-auto text-center">
      <Card className="w-full max-w-md shadow-lg border-2">
        <CardContent>
          <Typography variant="h4">{country.name.common}</Typography>
          <Typography variant="h6">
            <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Capital:
            </span>
            {country.capital}
          </Typography>
          <Typography variant="h6">
            <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Region:
            </span>
            {country.region}
          </Typography>
          <Typography variant="h6">
            <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Population:
            </span>
            {country.population}
          </Typography>
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="w-44 mx-auto my-3"
          />
        </CardContent>
        <div className="p-3 flex justify-center">
          <Button
            component={Link}
            to={ROUTES.HOME}
            variant="contained"
            color="primary"
            className="capitalize w-full"
          >
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CountryInfoCard;