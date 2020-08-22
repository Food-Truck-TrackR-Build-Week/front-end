import React, { useState, useEffect } from "react";
// import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Container, Input } from "semantic-ui-react";
import axios from "axios";

// TODO: Complete routing in onSubmit function using history.push

const Login = () => {
  // Setting state for diner / operator
  const [isDiner, setIsDiner] = useState(false);

  const [isOperator, setIsOperator] = useState(false);

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

// Displays errors when validation is failed
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

// Keeps submit button in disabled state until validation is passed
  const [btnDisabled, setBtnDisabled] = useState(true)

// Function to keep button disabled until validation is passed
useEffect(() => {
  formSchema.isValid(user).then((valid) => {
      setBtnDisabled(!valid)
  })
}, [user])

// Yup validation schema
const formSchema = yup.object().shape({
  username: yup
  .string()
  .required('Username is a required field'),
  password: yup
  .string()
  .required('Password is a required field')
})

// Form validation to display errors
const validateChange = (e) => {
  yup
  .reach(formSchema, e.target.name)
  .validate(e.target.value)
  .then((valid) => {
    setErrors({
      ...errors, 
      [e.target.name]: ""
    })
  })
  .catch((err) => {
    setErrors({
      ...errors,
      [e.target.name]: err.errors[0]
    })
  })
}

const handleChange = (evt) => {
  evt.persist();
  setUser({
    ...user, 
    [evt.target.name]: evt.target.value
  })
  validateChange(evt)
}

const submitLogin = (e) => {
  e.preventDefault();
  axios
  .post('https://food-truck-trackr-api.herokuapp.com/api/auth/login', {
    username: user.username,
    password: user.password
  })
  .then((res) => {
    console.log('submitted', res)
    // history.push()
  })
}

  return (
    <Container textalign='center'>
      <h1>Welcome to FoodTruckFindr</h1>
      <Form onSubmit={submitLogin}>      
        <Form.Field>
          <Input 
          size='small' 
          placeholder='Username:' 
          name='username' 
          type='text' 
          value={user.username} 
          onChange={handleChange} />
          {errors.username.length > 0 ? <p className='error'>{errors.username}</p>: null}
          <br />
          <br />
          <Input 
          size='small' 
          placeholder='Password:' 
          name='password' 
          type='password' 
          value={user.password} 
          onChange={handleChange} />
          {errors.password.length > 0 ? <p className='error'>{errors.password}</p>: null}
        </Form.Field>
          <Button type='submit' disabled={btnDisabled}>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;