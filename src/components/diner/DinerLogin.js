import React from "react";
import {BrowserRouter as Switch} from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import LoginForm from "../LoginForm";
import DinerDashboard from "./DinerDashboard";

const Diner = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Diner;
