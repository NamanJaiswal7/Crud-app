/**
 * Form fields required for the movies form.
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2025
 * @module src/config/formFields
 */

export const formFields = [
  { label: "Movie Title", name: "title", type: "text", validation: "required" },
  { label: "Genre", name: "genre", type: "text", validation: "required" },
  {
    label: "Release Year",
    name: "releaseYear",
    type: "number",
    validation: "required|year",
  },
];
