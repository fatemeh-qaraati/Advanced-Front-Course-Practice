export const ADD_RESERVATION = "ADD_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const EDIT_RESERVATION = "EDIT_RESERVATION";
export const ADD_ROOM_AND_FEATURES = "ADD_ROOM_AND_FEATURES";

export const addReservation = (reservation) => {
  return {
    type: ADD_RESERVATION,
    payload: reservation,
  };
};

export const removeReservation = (id) => {
  return {
    type: REMOVE_RESERVATION,
    payload: id,
  };
};

export const addRoomAndFeatures = (payload) => ({
  type: ADD_ROOM_AND_FEATURES,
  payload,
});

export const editReservation = (updatedReservation) => {
  return {
    type: EDIT_RESERVATION,
    payload: updatedReservation,
  };
};