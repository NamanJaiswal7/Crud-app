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

  useEffect(() => {
    if (id) {
      const existingMovie = movies.find((movie) => movie.id === id);
      if (existingMovie) setFormData(existingMovie);
    }
  }, [id, movies]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    navigate("/movies");
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
