/**
 * The `store` is the central Redux store that holds the entire state of the application.
 * It is configured using `configureStore` provided by Redux Toolkit.
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2025
 * @module src/redux/store
 */

import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";

const store = configureStore({
  reducer: {
    entries: moviesSlice,
  },
});

export default store;
