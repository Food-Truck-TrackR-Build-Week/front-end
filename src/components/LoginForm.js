import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Container, Input } from "semantic-ui-react";
import axios from "axios";

const Login = () => {
  // Setting state for diner / operator
  const [isDiner, setIsDiner] = useState(false);

  const [isOperator, setIsOperator] = useState(false);

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

// Create radio(?) buttons for Diner / Operator - DONE
// Update state from false to true based on which option is selected - DONE
// Login will Route to correct dashboard based on which option is selected

const changeStateD = () => {
  setIsDiner(!isDiner)  
  console.log(isDiner)
}

const changeStateO = () => {
  setIsOperator(!isOperator)
  console.log(isOperator)
}

const handleChange = (evt) => {
  evt.persist();
  setUser({
    ...user, 
    [evt.target.name]: evt.target.value 
  })
}

// onSubmit should contain IF statement based on checked radio
const submitLogin = (e) => {
  e.preventDefault();
  axios
  .post('https://food-truck-trackr-api.herokuapp.com/api/auth/login', {
    username: user.username,
    password: user.password
  })
  .then((res) => {
    console.log('submitted', res)
  })
}

  return (
    <Container textalign='center'>
      <h1>Welcome to FoodTruckFindr</h1>
      <Form onSubmit={submitLogin}>
        <Form.Field>
          <Button.Group>
            <Button onClick={changeStateD}>Diner</Button>
            <Button.Or text='or' /> 
            <Button onClick={changeStateO}>Operator</Button>
          </Button.Group>
        </Form.Field>
        <Form.Field>
          <Input size='small' placeholder='Username: ' name='username' type='text' value={user.username} onChange={handleChange} />
          <br />
          <br />
          <Input size='small' placeholder='Password: ' name='password' type='password' value={user.password} onChange={handleChange} />
        </Form.Field>
          <Button type='submit'>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
