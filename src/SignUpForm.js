import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    username: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (formErrors) {
      setErrors(formErrors);
    } else {
      console.log(formData);
    }
  };

  const validateForm = () => {
    const formErrors = {
      email: '',
      password: '',
      username: '',
      phoneNumber: ''
    };

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6 || formData.password.length > 9) {
      formErrors.password = 'Password must be between 6 and 9 characters';
    }

    if (!formData.username) {
      formErrors.username = 'Username is required';
    }

    if (formData.phoneNumber.length !== 10) {
      formErrors.phoneNumber = 'Phone number must be exactly 10 characters';
    }

    return Object.values(formErrors).some(error => error !== '') ? formErrors : null;
  };

  return (
    <div className='form-wrapper'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          <p>{errors.email && <span className="error">{errors.email}</span>}</p>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <p>{errors.password && <span className="error">{errors.password}</span>}</p>
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          <p>{errors.username && <span className="error">{errors.username}</span>}</p>
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          <p>{errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}</p>
        </div>
        <button className='btn' type="submit">Sign Up</button>
      </form></div>
  );
};

export default SignUpForm;
