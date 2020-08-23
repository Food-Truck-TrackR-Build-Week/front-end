import React, { useState, useEffect } from "react";
import RegisterForm from './RegisterForm';
import { Route } from 'react-router-dom';
import * as yup from 'yup';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Container, Input, Segment, Grid, Divider } from "semantic-ui-react";
import axios from "axios";

// TODO: Complete routing in onSubmit function using history.push

const Login = () => {
  // Setting state for diner / operator
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const [userId, setUserId] = useState()

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

// const regPath = () => {
//   <Route path='/register' component={RegisterForm} />
// }

const submitLogin = (e) => {
  e.preventDefault();
  axios
  .post('https://food-truck-trackr-api.herokuapp.com/api/auth/login', {
    username: user.username,
    password: user.password
  })
  .then((res) => {
    console.log('submitted', res)
    setUserId(res.data.diner.id)
    // const pushRoute = () => {
    //   if (res.data.type === 'diner') {
    //     history.push({DinerDashboard}, pushRoute)
    //   }
    // }
  })
}

  return (
    <Container textalign='center'>
      <h1>Welcome to FoodTruckFindr</h1>
      <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit={submitLogin}>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
          {errors.username.length > 0 ? <p className='error'>{errors.username}</p>: null}
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          {errors.password.length > 0 ? <p className='error'>{errors.password}</p>: null}
          <Button type='submit' disabled={btnDisabled} content='Login' primary />
        </Form>
      </Grid.Column>
      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' /*onClick={regPath}*/ />
      </Grid.Column>
    </Grid>
    <Divider vertical>Or</Divider>
  </Segment>
  </Container>
  );
};

export default Login;