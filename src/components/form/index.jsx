import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CitySelection from "../city-selection/index.jsx";
import CountySelection from "../county-selection/index.jsx";
import * as yup from "yup";

const schema = yup.object().shape({
  city: yup.string().required("انتخاب شهر اجباری است"),
  county: yup.string().required("حتما شهرستان محل زندگی خود را وارد کنید"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [cities, setCities] = useState({});
  const [counties, setCounties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const selectedCity = watch("city");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./iranstates.json");
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error isloading:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const selectedCityCounties = cities[selectedCity];
      setCounties(selectedCityCounties || []);
      setValue("county", "");
    } else {
      setCounties([]);
    }
  }, [selectedCity, cities, setValue]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  if (isLoading) {
    return <div>is Loading...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-9 w-full max-w-md rounded-lg"
    >
      <h1 className="mb-5 text-3xl font-extrabold text-gray-700 text-center">محل زندگی شما</h1>

      <CitySelection cities={cities} register={register} error={errors.city} />

      <CountySelection
        counties={counties}
        register={register}
        error={errors.county}
        isDisabled={!counties.length}
      />

      <button
        type="submit"
        className="w-full py-3 text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;