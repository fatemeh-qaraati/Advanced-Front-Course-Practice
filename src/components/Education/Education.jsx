import React from "react";

const Education = () => {
  return (
    <div className="my-6">
      <p className="text-lg text-rose-800 font-bold mb-3">
        Education Background
      </p>
      <div className="border-b-4 border-rose-800 w-28 mb-3"></div>

      <ul>
        <li className="flex flex-col  mb-2 mr-2">
          <p>2021</p>
          <p>
            <span className="text-green-700">
              B.E. (INFORMATION TECHNOLOGY)
            </span>
            , PIMPRI CHINCHWAD COLLEGE OF ENGINEERING, PUNE.
          </p>
          <p>Percenatge: 76.61</p>
        </li>

        <li className="flex flex-col  mb-2 mr-2">
          <p>2017</p>
          <p>
            <span className="text-green-700">HCS</span>, RAJARSHI SHAHU COLLEGE,
            LATUR.
          </p>
          <p>Percenatge: 80.77</p>
        </li>

        <li className="flex flex-col  mb-2 mr-2">
          <p>2015</p>
          <p>
            <span className="text-green-700">SSC</span>, DNYANESHWAR HIGH
            SCHOOL, LATUR
          </p>
          <p>Percenatge: 93.80</p>
        </li>
      </ul>
    </div>
  );
};

export default Education;