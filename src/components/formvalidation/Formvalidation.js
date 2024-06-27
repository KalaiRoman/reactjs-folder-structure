import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { ToastError, ToastSuccess } from './../../middleware/ToastModal/ToastModals';

function FormValidation() {
  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z
      .string()
      .min(1, { message: 'This field has to be filled.' })
      .email('This is not a valid email.'),
  });

  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const { name, email } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(user);
    if (result.success) {
      setErrors({});
      console.log('Form data is valid:', result.data);
      ToastSuccess('Form data is valid!');
    } else {
      const newErrors = result.error.flatten().fieldErrors;
      setErrors(newErrors);
      ToastError('Form data is invalid.');
    }
  };

  const edit = () => {
    setUser({ name: 'kalaisurya', email: 'kalai@cdp360.in' });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        name="name"
        onChange={handleChange}
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        <button onClick={edit}>Edit</button>
      </div>
    </div>
  );
}

export default FormValidation;
