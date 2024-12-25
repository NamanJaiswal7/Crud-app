/**
 * Component to show the form for movie information.
 * This component is used for both creating and updating movie data.
 * It displays input fields for movie title, genre, and release year, and handles validation and form submission.
 * 
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2025
 * @module components/pages/MovieForm
 */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formFields } from "../../config/formFields";
import { validateFields } from "../../utils/validation";
import InputField from "../common/InputField";
import { addMovie, updateMovie } from "../../redux/moviesSlice";

const MovieForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((state) => state.entries);

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // If editing an existing movie, populate the form with the movie data
  useEffect(() => {
    if (id) {
      const existingMovie = movies.find((movie) => movie.id === id);
      if (existingMovie) setFormData(existingMovie);
    }
  }, [id, movies]);

  /**
   * Event handler to update the formData state when an input field changes.
   * @param {Object} e - Event object captured when an input field changes.
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles the form submission.
   * Validates the form data and either adds or updates a movie in the Redux store.
   * @param {Object} e - Event object passed on form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields(formData, formFields);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (id) {
      dispatch(updateMovie({ id, updatedData: formData }));
    } else {
      dispatch(addMovie({ ...formData, id: Date.now().toString() }));
    }

    navigate("/");
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        {formFields.map((field, idx) => (
          <InputField
            key={idx}
            label={field.label}
            name={field.name}
            type={field.type}
            value={formData[field.name] || ""}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
