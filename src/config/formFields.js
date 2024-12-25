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
