import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Header from "../components/home/header";
import Footer from "../components/home/footer";
import { HOME_ROUTE, LOGIN_ROUTE } from "../constant/routes";
import { STORAGE_SIGNUP_DATA } from "../constant";

const SignUp = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),

    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),

    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    const userSignUpData =
      JSON.parse(localStorage.getItem(STORAGE_SIGNUP_DATA)) || [];
    userSignUpData.push(formData);
    localStorage.setItem(STORAGE_SIGNUP_DATA, JSON.stringify(userSignUpData));
    toast.success("Registration successful!");
    navigate(HOME_ROUTE);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="bg-gray-100 flex items-center justify-center">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-md overflow-hidden w-[70%] my-8 lg:w-[50%]">
          <div className="hidden sm:block md:w-1/2 bg-blue-900">
            <img
              src="/images/sign-up.jpg"
              alt="Sign-up"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-col items-center mb-6">
              <h1 className="text-2xl font-bold text-blue-900 mb-3">Sign up</h1>
              <h2 className="text-xl text-gray-700">Create Account</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  {...register("username")}
                  className={`w-full px-4 py-2 border ${
                    errors.username ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full px-4 py-2 border ${
                    errors.email ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  {...register("password")}
                  className={`w-full px-4 py-2 border ${
                    errors.password ? "border-red-400" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <a
                href={LOGIN_ROUTE}
                className="text-blue-800 hover:text-blue-500"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;