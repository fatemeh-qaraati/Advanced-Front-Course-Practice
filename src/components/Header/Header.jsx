import React from "react";
import image from "../../assets/images/profile.jpg";

const Header = () => (
  <header className="bg-rose-800 text-white py-6 px-8 flex items-center w-full relative">
    <div className="sm: static md:absolute top-1/4 left-5">
      <img
        src={image}
        alt="Profile"
        className="rounded-md hover:scale-110 w-28 h-28 object-cover border-2 border-white sm:rounded-full"
      />
    </div>

    <div className="text-center mx-auto">
      <h1 className="text-2xl font-bold">Elisa Rose</h1>
      <p className="text-xs">Software Engineer</p>
    </div>
  </header>
);

export default Header;