import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tableColumns } from "../../config/tableColumns";
import Table from "../common/Table";

const MoviesList = () => {
  const movies = useSelector((state) => state.entries);
  const navigate = useNavigate();

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
