import React from "react";
import {BrowserRouter as Switch} from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
import DinerDashboard from "./DinerDashboard";
import OperatorDashboard from "../operator/OperatorDashboard";

const Diner = () => {



  return (
    <>
      <h1>Diner</h1>

      <LoginForm />
      <RegisterForm />
      <Switch>
        <PrivateRoute
          exact
          path="/dashboard-diner"
          component={DinerDashboard}
        />
      </Switch>
      {<PrivateRoute
        exact
        path="/dashboard-operator"
        component={OperatorDashboard}
      />}
    </>
  );
};

export default Diner;
