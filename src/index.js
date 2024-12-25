/**
 * Root element where the app will be rendered.
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2025
 * @module src/index
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
