import React, { useState } from "react";
import * as yup from 'yup';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Container, Input } from "semantic-ui-react";
import axios from "axios";
import Header from './Header';
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    location: '',
    isDiner: null,
    isOperator: null
  })

const push = useHistory();
const [dinerId, setDinerId] = useState();
const [operatorId, setOperatorId] = useState();

const [errors, setErrors] = useState({
  username: '',
  email:'',
  password: '',
  location: ''
})

const formSchema = yup.object().shape({
  username: yup.string().required('Username is a required field').min(6, 'Username must be at least 6 characters'),
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is a required field'),
  location: yup.string().required('Location is a required field')
})

const handleValidation = (e) => {
  yup
  .reach(formSchema, e.target.name) 
  .validate(e.target.value)
  .then((valid) => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    })
  })
  .catch((err) => {
    setErrors({
      ...errors, 
      [e.target.name]: err.errors[0]
    })
  })
}

const inputChange = (e) => {
  e.persist();
  setNewUser({
    ...newUser,
    [e.target.name === 'diner']: e.target.value,
    [e.target.name === 'operator']: e.target.value
  })
  handleValidation(e);
}

// This submit function directs to proper API based on the value of the button selected
const handleSubmit = (e) => {
  e.preventDefault();
  e.persist();
  if (newUser.isDiner === true) {
    axiosWithAuth()
    .post('/api/auth/register/diner', {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      location: newUser.location
    })
    .then((res) => {
      console.log('New Diner Created', res);
      setDinerId(res.data.diner.id);
      localStorage.setItem(dinerId, res.data.diner.id);
      push('/dashboard-diner/:dinerId');
    }) .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        })
    })
  } 
  else if (newUser.isOperator === true) {
    axios
    .post('/api/auth/register/operator', {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      location: newUser.location
    })
    .then((res) => {
      console.log('New Operator Created', res);
      setOperatorId(res.data.operator.id);
      localStorage.setItem(operatorId, res.data.operator.id);
      push('/dashboard-operator/:operatorId');
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
      <Header />
    <Form onSubmit={handleSubmit}>
      <h1>Register component</h1>
        <Form.Field>
          <Button.Group>
            <Button type='button' name='diner' onClick={() => setNewUser({
              ...newUser, 
              isDiner: true, 
              isOperator: false})}>Diner</Button>
            <Button.Or text='or' /> 
            <Button type='button' name='operator' onClick={() => setNewUser({
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
          // value={newUser.username} // Inputs are not editable if value property is set?
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
          <br />
          <br />
          <Input 
          size='small' 
          placeholder='Location:' 
          name='location' 
          type='location' 
          // value={newUser.location} 
          onChange={inputChange} 
          />
        </Form.Field>
          <Button type='submit'>Register</Button>
    </Form>
    </Container>
  );
};

export default Register;
