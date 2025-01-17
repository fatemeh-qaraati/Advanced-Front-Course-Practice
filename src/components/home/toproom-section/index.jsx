import React, { useState } from "react";
import useFetch from "../../../Hook/useFetch.js";
import Loading from "../../loading/index.jsx";

const TopRoomsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data: rooms, loading, error } = useFetch("/topRoomsData.json");

  const roomsPerPage = 3;

  const currentRooms = rooms?.slice(
    currentPage * roomsPerPage,
    (currentPage + 1) * roomsPerPage
  );

  const handleNextPage = () => {
    if ((currentPage + 1) * roomsPerPage < rooms?.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <Loading isLoading={loading}>
        <p>Top Room section is loading...</p>
      </Loading>
    );
  }

  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <section id="toproom-section" className="top-rooms-section py-10 relative">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-blue-950">Top Rooms</h3>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentRooms?.map((room) => (
            <div
              style={{ "backgroundColor": "#F2F9FF" }}
              key={room.id}
              className="p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-52 object-cover rounded-t-lg hover:opacity-90"
              />

              <h3 className="text-xl font-semibold mt-4 text-blue-950">
                {room.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">{room.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-blue-950">
                  ${room.price}
                </span>
                <button className="bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                  book now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePreviousPage}
          style={{ "backgroundColor": "#000B58", color: "#C6E7FF" }}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl w-10 h-10 flex items-center justify-center rounded-full disabled:opacity-50"
          disabled={currentPage === 0}
        >
          &lt;
        </button>

        <button
          onClick={handleNextPage}
          style={{ "backgroundColor": "#000B58", color: "#C6E7FF" }}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl w-10 h-10 flex items-center justify-center rounded-full disabled:opacity-50"
          disabled={(currentPage + 1) * roomsPerPage >= rooms?.length}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default TopRoomsSection;