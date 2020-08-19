import React from "react";
import {BrowserRouter as Switch} from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
import OperatorDashboard from "./OperatorDashboard";

const Operator = () => {
  return (
    <>
      <h1>Operator</h1>

      <LoginForm />
      <RegisterForm />
      <Switch>
        <PrivateRoute
          exact
          path="/dashboard-operator"
          component={OperatorDashboard}
        />
      </Switch>
    </>
  );
};

export default Operator;
