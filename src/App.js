import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import LoginForm from './components/LoginForm';
import DinerLogin from "./components/diner/DinerLogin";
import OperatorLogin from "./components/operator/OperatorLogin";
import DinerDashboard from "./components/diner/DinerDashboard";

const App = () => {
  return (
    <Router>
      <div className="App">Food Truck TrackR</div>
      <NavLink to="/diner">Diner</NavLink>
      <NavLink to="/operator">Operator</NavLink>
      <NavLink to="/diner/home">Diner Dashboard</NavLink>
      <Route exact path="/diner" component={DinerLogin} />
      <Route exact path="/diner/home" component={DinerDashboard} />
      <Route exact path="/operator" component={OperatorLogin} />
    </Router>
  );
};

export default App;
