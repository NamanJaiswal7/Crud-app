/**
 * Component to show the list of movies in a table with action buttons like "Edit".
 * This component retrieves the list of movies from the Redux store and displays them in a table.
 * It also provides an "Edit" button for each movie to navigate to the movie editing form.
 * 
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2025
 * @module components/pages/MovieList
 */

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tableColumns } from "../../config/tableColumns";
import Table from "../common/Table";

const MoviesList = () => {
  const movies = useSelector((state) => state.entries);
  const navigate = useNavigate();

  // Define actions for the table, including the "Edit" button with a navigation action
  const actions = [
    {
      label: "Edit",
      className: "btn btn-warning",
      onClick: (movie) => navigate(`/movies/form/${movie.id}`),
    },
  ];

  return (
    <div className="container mt-4">
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/movies/form")}
      >
        Add Movie
      </button>
      <Table columns={tableColumns} data={movies} actions={actions} />
    </div>
  );
};

export default MoviesList;
