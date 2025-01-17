import {
  ADD_RESERVATION,
  EDIT_RESERVATION,
  REMOVE_RESERVATION,
  ADD_ROOM_AND_FEATURES,
} from "../actions/reservationActions.js";

const reservationReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];

    case REMOVE_RESERVATION:
      return state.filter((item) => item.id !== action.payload);

    case ADD_ROOM_AND_FEATURES:
      return state.map((reservation) =>
        reservation.id === action.payload.reservationId
          ? {
              ...reservation,
              rooms: [...(reservation.rooms || []), action.payload.room],
              features: [
                ...(reservation.features || []),
                ...action.payload.features,
              ],
            }
          : reservation
      );

    case EDIT_RESERVATION:
      return state.map((reservation) =>
        reservation.id === action.payload.id ? action.payload : reservation
      );

    default:
      return state;
  }
};

export default reservationReducer;