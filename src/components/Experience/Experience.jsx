import React from "react";

const Experience = () => {
  return (
    <div className="my-8">
      <p className="text-lg text-rose-800 font-bold mb-3">
        Professional Experience
      </p>
      <div className="border-b-4 border-rose-800 w-28 mb-3"></div>

      <div>
        <p className="font-bold mb-1">
          Netcracker Technology | Software Engineer
        </p>
        <p>2021 - Present</p>
        <p className="font-bold mb-2 mt-1">Key Responsibilities</p>

        <ul className="list-disc ml-4 mb-6">
          <li>Working on customer facing product</li>
          <li>Delivering highly efficient solutions</li>
          <li>Solving critical bugs</li>
        </ul>
      </div>

      <div>
        <p className="font-bold mb-1">TailwindFlex.com | Lead</p>
        <p>2020 - 2021</p>
        <p className="font-bold mb-2 mt-1">Key Responsibilities</p>

        <ul className="list-disc ml-4">
          <li>Developed usable components</li>
          <li>Solving complex problems</li>
          <li>Solving critical bugs</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;