import { combineReducers } from "redux";
import reservationReducer from "./reservationReducer.js";

const rootReducer = combineReducers({
  reservations: reservationReducer,
});

export default rootReducer;