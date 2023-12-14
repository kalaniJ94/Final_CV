import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const SignupForm = ({ onSignup }) => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    setUserFormData({ ...userFormData, validated: true });

    if (form.checkValidity() === false) {
      event.preventDefault();
      return;
    }

    try {
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);

    if(onSignup){
    onSignup();
    }

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      validated: false,
    });
  };

  return (
    <>
      <div className='signUpForm scrollable-container' style={{ maxWidth: '400px', margin: 'auto' }}>
        <h2>Sign Up</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your signup!
          </Alert>

          <div className="d-flex flex-wrap justify-content-between">
            <Form.Group className='mb-2 mr-2' style={{ flex: '1 1 auto' }}>
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
                size='sm'
              />
              <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-2 mr-2' style={{ flex: '1 1 auto' }}>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                onChange={handleInputChange}
                value={userFormData.email}
                required
                size='sm'
              />
              <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-2 ml-2' style={{ flex: '1 1 auto' }}>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
                size='sm'
              />
              <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
            </Form.Group>
          </div>

          <Button className='signUpBtn' disabled={!(userFormData.username && userFormData.email && userFormData.password)} type='submit' variant='success' size='sm'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};


export default SignupForm;