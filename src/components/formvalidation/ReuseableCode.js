// App.js
import React from 'react';
import FormValidation from './Formvalidation';

const ReuseableCode = () => {
  const handleFormSubmit = (data) => {
    console.log("data ", data);
  };

  return (
    <div>
      <h1>User Form</h1>
      <FormValidation onSubmit={handleFormSubmit} />
    </div>
  );
};

export default ReuseableCode;
