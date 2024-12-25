import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieForm from "./components/pages/MovieForm";
import MoviesList from "./components/pages/MovieList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/form" element={<MovieForm />} />
        <Route path="/movies/form/:id" element={<MovieForm />} />
      </Routes>
    </Router>
  );
};

export default App;
