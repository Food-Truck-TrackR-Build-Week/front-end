import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import DinerLogin from "./components/diner/DinerLogin";
import OperatorLogin from "./components/operator/OperatorLogin";

const App = () => {
  return (
    <Router>
      <div className="App">Food Truck TrackR</div>
      <NavLink to="/diner">Diner</NavLink>
      <NavLink to="/operator">Operator</NavLink>

      <Route exact path="/diner" component={DinerLogin} />
      <Route exact path="/operator" component={OperatorLogin} />
    </Router>
  );
};

export default App;
