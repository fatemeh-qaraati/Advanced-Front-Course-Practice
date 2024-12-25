import React from "react";

const TabContent = ({ content }) => (
  <div className="p-6 text-center">
    <h3 className="text-2xl mb-4">{content.title}</h3>
    <p className="text-gray-800">{content.text}</p>
  </div>
);

export default TabContent;