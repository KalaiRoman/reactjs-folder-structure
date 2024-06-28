// useValidation.js
import { useState } from 'react';
const useValidation = (schema) => {
  const [errors, setErrors] = useState({});
  const validate = (data) => {
    try {
      schema.parse(data);
      setErrors({});
      return true;
    } catch (e) {
      const formattedErrors = {};
      e.errors.forEach(err => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return false;
    }
  };

  return { errors, validate };
};

export default useValidation;
