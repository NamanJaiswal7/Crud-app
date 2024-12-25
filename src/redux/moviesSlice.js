import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    updateMovie: (state, action) => {
      const index = state.findIndex((movie) => movie.id === action.payload.id);
      if (index >= 0) {
        state[index] = action.payload.updatedData;
      }
    },
  },
});

export const { addMovie, updateMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
