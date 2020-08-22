import React, { useState } from "react";
import * as yup from 'yup';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Container, Input } from "semantic-ui-react";
import axios from "axios";

// TODO: Create form layout to accept Username, Email, Password
// TODO: Allow the form to choose whether the newUser is a diner or operator
// TODO: Form validation to include test for valid email

const Register = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    isDiner: null,
    isOperator: null
  })

const inputChange = (e) => {
  e.persist();
  setNewUser({
    ...newUser,
    [e.target.name === 'diner']: e.target.value,
    [e.target.name === 'operator']: e.target.value
  })
}

const [errors, setErrors] = useState({
  username: '',
  email:'',
  password: ''
})

// This submit function directs to proper API based on the value of the button selected
const handleSubmit = (e) => {
  e.preventDefault();
  if (newUser.isDiner === true) {
    axios
    .post('https://food-truck-trackr-api.herokuapp.com/api/auth/register/diner', {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    })
    .then((res) => {
      console.log('New Diner Created', res)
    }) .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        })
    })
  } 
  else if (newUser.isOperator === true) {
    axios
    .post('https://food-truck-trackr-api.herokuapp.com/api/auth/register/operator', {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    })
    .then((res) => {
      console.log('New Operator Created', res)
    }) .catch((err) => {
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      })
    })
  }
}

  return (
    <Container textalign='center'>
    <Form onSubmit={handleSubmit}>
      <h1>Register component</h1>
        <Form.Field>
          <Button.Group>
            <Button type='button' name='diner' onClick={() => setNewUser({
              ...newUser, 
              isDiner: true, 
              isOperator: false})}>Diner</Button>
            <Button.Or text='or' /> 
            <Button type='button' name='operator' onClick= {() => setNewUser({
              ...newUser, 
              isOperator: true, 
              isDiner: false})}>Operator</Button>
          </Button.Group>
        </Form.Field>
        <Form.Field>
          <Input 
          size='small' 
          placeholder='Username:' 
          name='username' 
          type='text' 
          // value={newUser.username} Inputs are not editable if value property is set?
          onChange={inputChange} 
          />
          <br />
          <br />
          <Input 
          size='small' 
          placeholder='Email:' 
          name='email' 
          type='email' 
          // value={newUser.email} 
          onChange={inputChange} 
          />
          <br />
          <br />
          <Input 
          size='small' 
          placeholder='Password:' 
          name='password' 
          type='password' 
          // value={newUser.password} 
          onChange={inputChange} 
          />
        </Form.Field>
          <Button type='submit' /* disabled={btnDisabled} */>Register</Button>
    </Form>
    </Container>
  );
};

export default Register;
