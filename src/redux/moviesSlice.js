/**
 * The `moviesSlice` is a Redux slice created using Redux Toolkit.
 * It manages the state related to movies, including actions and reducers.
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2025
 * @module src/redux/moviesSlice
 */

import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    /**
     * Adds a new movie to the state.
     * @param {Array} state - The current state of movies.
     * @param {Object} action - The dispatched action containing the new movie data in `action.payload`.
     */
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    
    /**
     * Updates an existing movie in the state.
     * @param {Array} state - The current state of movies.
     * @param {Object} action - The dispatched action containing the movie ID and updated data in `action.payload`.
     */
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
