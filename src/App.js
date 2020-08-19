import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import DinerDashboard from "./components/DinerDashboard";
import OperatorDashboard from "./components/OperatorDashboard";

const App = () => {
  return (
    <Router>
      <div className="App">Food Truck TrackR</div>

      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />

      <Switch>
        <PrivateRoute
          exact
          path="/dashboard-diner"
          component={DinerDashboard}
        />
        <PrivateRoute
          exact
          path="/dashboard-operator"
          component={OperatorDashboard}
        />
      </Switch>
    </Router>
  );
};

export default App;
