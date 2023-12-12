
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { loginUser } from '../utils/API';
import Auth from '../utils/auth.js';

const LoginForm = ({ onLogin }) => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await loginUser(userFormData);
      console.log('Login response:', response);
      if (response.status !== 200) {
        throw new Error('Something went wrong!');
      }
      const { token, user } = await response.json();
      Auth.login(token);

      // Call the onLogin callback if provided
      if (onLogin) {
        onLogin();
      }
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    // Reset the form data
    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
    <div className='logInForm scrollable-container'>
    <h1>Log In</h1>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button className='loginBtn'
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
};

export default LoginForm;