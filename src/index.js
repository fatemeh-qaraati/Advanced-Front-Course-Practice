import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/style.css";
import App from "./App";
import { Provider } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from "./store/store.js";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
  </React.StrictMode>
);