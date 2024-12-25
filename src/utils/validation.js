/**
 * Validations for the fields.
 * @author Naman Kumar <namankumar.hk@gmail.com>
 * @created Dec 25, 2025
 * @module src/utils/validation
 */

/**
 * A utility function to validate form data based on field-specific validation rules.
 * @param {Object} formData - The current form data with field names as keys and their respective values as inputs.
 * @param {Array} fieldsConfig - An array of field configuration objects, each containing:
 *   - {string} name: The name of the field.
 *   - {Array<string>} validation: An array of validation rules to apply (e.g., "required", "year").
 * @returns {Object} errors - An object containing validation error messages for invalid fields.
 *   Keys are field names, and values are the respective error messages.
 */
export const validateFields = (formData, fieldsConfig) => {
  const errors = {};
  fieldsConfig.forEach(({ name, validation }) => {
    if (validation.includes("required") && !formData[name]) {
      errors[name] = `${name} is required.`;
    }
    if (
      validation.includes("year") &&
      formData[name] &&
      !/^\d{4}$/.test(formData[name])
    ) {
      errors[name] = `${name} must be a valid year (e.g., 2024).`;
    }
  });
  return errors;
};
