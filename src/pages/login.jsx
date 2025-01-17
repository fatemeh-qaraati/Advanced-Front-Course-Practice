import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hook/useFetch.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { HOME_ROUTE, SIGN_UP_ROUTE } from "../constant/routes";
import Loading from "../components/loading";
import { STORAGE_LOGIN, STORAGE_USER_ID } from "../constant/index.js";

const Login = () => {
  const navigate = useNavigate();
  const { data: users, loading, error } = useFetch("/userInfoData.json");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem(STORAGE_LOGIN);
    if (isLoggedIn === "true") {
      navigate(HOME_ROUTE);
    }
  }, [navigate]);

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 4 characters"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    if (loading) return;

    const user = users?.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      toast.success("Login successful!");
      localStorage.setItem(STORAGE_LOGIN, JSON.stringify(true));
      localStorage.setItem(STORAGE_USER_ID, user.id);
      setLoginSuccess(true);
      navigate(HOME_ROUTE);
    } else {
      toast.error("Invalid username or password. user not found");
      localStorage.setItem(STORAGE_LOGIN, JSON.stringify(false));
    }
  };

  const PasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  if (loading) {
    return <Loading isLoading={loading}></Loading>;
  }

  if (error) {
    toast.error("An error happened while fetching data");
    return <p className="text-red-500 text-center">Error loading data</p>;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/slider-s1-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80"></div>

      <div className="sm:w-[50%] m-6 relative flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden md:w-[80%] lg:w-[65%] z-10">
        <div className="hidden md:block md:w-1/2 bg-blue-900">
          <img
            src="/images/loginpage.jpg"
            alt="Login image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="flex w-10 h-10 rounded-full border border-gray-300 justify-center items-center">
              <FontAwesomeIcon icon={faUser} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mt-3">
              Welcome Back
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-600">Username</label>
              <input
                type="text"
                {...register("username")}
                className={`w-full px-4 py-2 border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block text-gray-600">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                {...register("password")}
                className={`w-full px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900`}
              />
              <button
                type="button"
                className="absolute right-4 top-11 transform -translate-y-1/2 text-blue-800"
                onClick={PasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-lg font-semibold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a
              href={SIGN_UP_ROUTE}
              className="text-blue-800 hover:text-blue-600 hover:underline"
            >
              Sign up
            </a>
          </p>
          <p className="text-center text-gray-600 mt-4">
            <button
              onClick={() => navigate(HOME_ROUTE)}
              className="text-blue-800 hover:text-blue-600"
            >
              Return Home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;