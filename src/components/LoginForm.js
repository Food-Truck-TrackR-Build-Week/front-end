import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Login = () => {
  // Setting state for diner / operator
  const [isDiner, setIsDiner] = useState(false);

  const [isOperator, setIsOperator] = useState(false);

// Create radio(?) buttons for Diner / Operator
// Update state from false to true based on which option is selected
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
    <>
      <h1>Login component</h1>
      <input type='radio' name='select' value='diner' onClick={changeStateD} />I'm a Foodie!
      <input type='radio' name='select' value='operator' onClick={changeStateO} />I'm an Operator!
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
