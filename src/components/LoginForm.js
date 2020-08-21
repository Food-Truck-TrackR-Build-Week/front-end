import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Container, Input } from "semantic-ui-react";

const Login = () => {
  // Setting state for diner / operator
  const [isDiner, setIsDiner] = useState(false);

  const [isOperator, setIsOperator] = useState(false);

// Create radio(?) buttons for Diner / Operator - DONE
// Update state from false to true based on which option is selected - DONE
// Login will Route to correct dashboard based on which option is selected

// const handleChange = (e) => {
//   if (e.target.value === 'operator') {
//   setIsOperator(true)
//   setIsDiner(false)
//   } // } else if (e.target.value === 'operator') {
//   //   setIsDiner(false)
//   //   setIsOperator(true)
//   // }
//   console.log('isDiner', isDiner)
// };

const changeStateD = () => {
  setIsDiner(!isDiner)  
  console.log(isDiner)
}

const changeStateO = () => {
  setIsOperator(!isOperator)
  console.log(isOperator)
}

// onSubmit should contain IF statement based on checked radio


  return (
    <Container textalign='center'>
      <h1>Welcome to FoodTruckFindr</h1>
      <Form>
        <Form.Field>
          <Button.Group>
            <Button onClick={changeStateD}>Diner</Button>
            <Button.Or text='or' /> 
            <Button onClick={changeStateO}>Operator</Button>
          </Button.Group>
        </Form.Field>
        <Form.Field>
          <Input size='small' placeholder='Username: ' type='text' />
          <br />
          <br />
          <Input size='small' placeholder='Password: ' type='password' />
        </Form.Field>
          <Button content='login' type='submit'>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
