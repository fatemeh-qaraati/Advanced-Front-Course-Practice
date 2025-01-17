import { createStore, compose } from "redux";
import rootReducer from "./reducer/index.js";
import { STORAGE_RESERVATION_INFO } from "../constant/index.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_RESERVATION_INFO);
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.error("Error loading state from localStorage:", e);
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.reservations);
    localStorage.setItem(STORAGE_RESERVATION_INFO, serializedState);
  } catch (e) {
    console.error("Error saving state to localStorage:", e);
  }
};

const persistedState = {
  reservations: loadState(),
};

const store = createStore(rootReducer, persistedState, composeEnhancers());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;