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
      errors[name] = `${name} must be a valid year (e.g., 2023).`;
    }
  });
  return errors;
};
