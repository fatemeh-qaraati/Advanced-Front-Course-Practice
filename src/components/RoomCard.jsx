import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

const RoomCard = ({ room, selectedRoom, onSelect }) => {
  return (
    <div
      key={room.id}
      className={`mt-3 border-2 p-3 rounded cursor-pointer ${
        selectedRoom?.id === room.id ? "border-blue-600" : "border-gray-300"
      }`}
      onClick={() => onSelect(room)}
    >
      <img
        src={room.image}
        alt={room.name}
        className="w-full h-[180px] object-cover rounded"
      />
      <h5 className="text-medium font-bold mt-2 text-blue-900">{room.name}</h5>
      <p className="text-base">{room.description}</p>

      <div className="flex flex-row gap-3 text-blue-800 mt-2">
        <p>{room.facilities}</p>
        <p>
          <FontAwesomeIcon icon={faBed} /> {room.bed}
        </p>
        <p>${room.price}</p>
      </div>
    </div>
  );
};

export default RoomCard;