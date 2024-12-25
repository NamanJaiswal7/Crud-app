/**
 * Generic input field component
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2025
 * @module components/common/inputField
 */

import React from "react";

/**
 * InputField component renders a labeled input field with error handling and optional validation styling.
 * @param {string} label - The label text to be displayed for the input field.
 * @param {string} name - The name attribute for the input field (used for form data).
 * @param {string} value - The value of the input field (used for controlled form component).
 * @param {function} onChange - The event handler function to update the value when input changes.
 * @param {string} error - The error message to display if the field is invalid.
 * @param {string} [type="text"] - The type of the input field (default is "text").
 */
const InputField = ({ label, name, value, onChange, error, type = "text" }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputField;
