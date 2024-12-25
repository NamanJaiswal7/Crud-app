import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";

const store = configureStore({
  reducer: {
    entries: moviesSlice,
  },
});

export default store;
