/**
 * The `App` component serves as the entry point for the React application.
 * It sets up the routes for navigating between different pages.
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2025
 * @module src/App
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieForm from "./components/pages/MovieForm";
import MoviesList from "./components/pages/MovieList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/form" element={<MovieForm />} />
        <Route path="/movies/form/:id" element={<MovieForm />} />
      </Routes>
    </Router>
  );
};

export default App;
