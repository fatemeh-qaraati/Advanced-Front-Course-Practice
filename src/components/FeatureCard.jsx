import React from "react";

const FeatureCard = ({ feature, selectedFeatures, onToggle }) => {
  return (
    <div
      key={feature.name}
      className={`cursor-pointer text-center ${
        selectedFeatures.includes(feature.name)
          ? "border-2 border-blue-600"
          : "border-2 border-gray-300"
      } p-3 rounded-md`}
      onClick={() => onToggle(feature.name)}
    >
      <img
        src={feature.image}
        alt={feature.name}
        className="w-full h-32 object-cover rounded"
      />
      <p className="mt-1">{feature.name}</p>
    </div>
  );
};

export default FeatureCard;