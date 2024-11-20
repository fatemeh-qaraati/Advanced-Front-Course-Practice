import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { FaJava, FaAndroid, FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="my-6">
      <p className="text-lg text-rose-800 font-bold mb-3">Skills</p>
      <div className="border-b-4 border-rose-800 w-28 mb-3"></div>

      <ul>
        <li className="flex items-center mb-2">
          <SiTailwindcss className="mr-2" aria-label="Tailwindcss" />
          Tailwind CSS
        </li>

        <li className="flex items-center mb-2">
          <FaJava className="mr-2" aria-label="Java" />
          Java
        </li>

        <li className="flex items-center mb-2">
          <FaAndroid className="mr-2" aria-label="Android" />
          Android
        </li>

        <li className="flex items-center mb-2">
          <FaCode className="mr-2" aria-label="Code" />
          Html, Css, JS
        </li>
      </ul>
    </div>
  );
};

export default Skills;