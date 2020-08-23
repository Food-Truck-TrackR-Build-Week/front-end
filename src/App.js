import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import DinerLogin from "./components/diner/DinerLogin";
import OperatorLogin from "./components/operator/OperatorLogin";
import DinerDashboard from "./components/diner/DinerDashboard";

const App = () => {
  return (
    <Router>
      <Route exact path="/diner" component={DinerLogin} />
      <Route exact path="/diner/home" component={DinerDashboard} />
      <Route exact path="/operator" component={OperatorLogin} />
      <Route exact path="/" >
        <div className="App">Food Truck TrackR</div>
        <NavLink to="/diner">Diner</NavLink>
        <NavLink to="/operator">Operator</NavLink>
        <NavLink to="/diner/home">Diner Dashboard</NavLink>
      </Route>
    </Router>
  );
};

export default App;
