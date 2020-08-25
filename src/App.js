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
import OperatorDashboard from "./components/operator/OperatorDashboard";
import ImageEditor from "./components/operator/ImageEditor";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <div className="App">Food Truck TrackR</div>
      <NavLink to="/diner">Diner</NavLink>
      <NavLink to="/operator">Operator</NavLink>

      <Switch>
        <Route exact path="/diner" component={DinerLogin} />
        <Route exact path="/operator" component={OperatorLogin} />
        <PrivateRoute exact path="/diner/home" component={DinerDashboard} />
        <PrivateRoute
          exact
          path="/operator/dashboard:operatorId"
          component={OperatorDashboard}
        />
        <Route exact path="/image-editor" component={ImageEditor} />
      </Switch>
    </Router>
  );
};

export default App;
