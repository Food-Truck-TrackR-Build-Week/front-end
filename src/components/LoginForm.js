import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Login = () => {
  // Setting state for diner / operator
  const [isDiner, setIsDiner] = useState(false);

  const [isOperator, setIsOperator] = useState(false);

// Create radio(?) buttons for Diner / Operator
// Update state from false to true based on which option is selected
// Login will Route to correct dashboard based on which option is selected



  return (
    <>
      <h1>Login component</h1>
      <input type='radio' />I'm a Foodie!
      <input type='radio' />I'm an Operator!
      <form>
        <br />
        <label htmlFor='username' />Username: 
          <input id='username' type='text' />
        <br /><br />
        <label htmlFor='password' />Password: 
          <input id='password' type='password' />
          <br /><br />
          <button id='login' type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
