import React from "react";

const Projects = () => {
  return (
    <div className="my-6">
      <p className="text-lg text-rose-800 font-bold mb-3">Projects</p>
      <div className="border-b-4 border-rose-800 w-28 mb-3"></div>

      <div className="mb-4">
        <p className="font-semibold mb-1">Used Books Mobile App</p>
        <p>
          A platform to sell as well as to buy used books only for PCCoE College
          due to this reuse books will be there beneficial for environment also
          indirectly helps increase communication between juniors and seniors.
        </p>
      </div>

      <div>
        <p className="font-semibold mb-1">Parking Automation System</p>
        <p>
          It's a web application which helps you to book your slot for your car
          just like booking a movie ticket from home.
        </p>
      </div>
    </div>
  );
};

export default Projects;