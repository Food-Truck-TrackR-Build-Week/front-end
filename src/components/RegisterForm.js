import React, { useState } from "react";
import * as yup from 'yup';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Container, Input } from "semantic-ui-react";
import axios from "axios";

// TODO: Create form layout to accept Username, Email, Password
// TODO: Allow the form to choose whether the user is a diner or operator
// TODO: Form validation to include test for valid email

const Register = () => {
  const [newDiner, setNewDiner] = useState({
    username: '',
    email: '',
    password: '',
    isDiner: true
  })

  const [newOperator, setNewOperator] = useState({
    username: '',
    email: '',
    password: '',
    isOperator: true
  })

const inputChange = (e) => {
  e.persist();
  setNewDiner({
    ...newDiner,
    [e.target.name === 'diner']: e.target.value
  })
}

const [errors, setErrors] = useState({
  username: '',
  email:'',
  password: ''
})

// TODO: Figure out how to get form to register diner or operator
const handleSubmit = (e) => {
  e.preventDefault();
  axios
  .post('https://food-truck-trackr-api.herokuapp.com/api/auth/register/diner', {
    username: newDiner.username,
    email: newDiner.email,
    password: newDiner.password
  })
  .then((res) => {
    console.log('success', res)
  }) .catch((err) => {

  })
}


  return (
    <Form onSubmit={handleSubmit}>
      <h1>Register component</h1>
        <Form.Field>
          <Button.Group>
            <Button type='button' name='diner' /* onClick={changeStateD} */ >Diner</Button>
            <Button.Or text='or' /> 
            <Button type='button' name='operator' /* onClick={changeStateO} */ >Operator</Button>
          </Button.Group>
        </Form.Field>
        <Form.Field>
          <Input 
          size='small' 
          placeholder='Username:' 
          name='username' 
          type='text' 
          value={user.username} 
          onChange={inputChange} 
          />
          <br />
          <br />
          <Input 
          size='small' 
          placeholder='Email:' 
          name='email' 
          type='email' 
          value={user.email} 
          onChange={inputChange} 
          />
          <br />
          <br />
          <Input 
          size='small' 
          placeholder='Password:' 
          name='password' 
          type='password' 
          value={user.password} 
          onChange={inputChange} 
          />
        </Form.Field>
          <Button type='submit' /* disabled={btnDisabled} */>Register</Button>
    </Form>
  );
};

export default Register;
