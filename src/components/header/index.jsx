import React from "react";

const Header = ({ activeTab, onTabChange }) => {
  const tabItems = ["OVERVIEW", "STATISTICS", "SETTINGS"];

  return (
    <div className="bg-sky-300 p-5">
      <div className="flex space-x-5 justify-center">
        {tabItems.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`rounded-md px-5 py-2 ${
              activeTab === tab
                ? "text-sky-900 border-b-2 border-blue-100"
                : "text-sky-900 hover:bg-sky-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;