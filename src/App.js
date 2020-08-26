import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import DinerLogin from "./components/diner/DinerLogin";
import OperatorLogin from "./components/operator/OperatorLogin";
import DinerDashboard from "./components/diner/DinerDashboard";
import OperatorDashboard from "./components/operator/OperatorDashboard";
import ImageEditor from "./components/operator/ImageEditor";
import PrivateRoute from "./components/PrivateRoute";
import {
  Header,
  Menu,
  Image,
  Segment,
  Grid,
  Divider,
  Button,
  Search,
  Label,
} from "semantic-ui-react";

import Food from "./images/undraw_Hamburger_8ge6.svg";
import FoodTruck from "./images/undraw_street_food_hm5i.svg";
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <Router>
      <Menu inverted size="massive" style={{borderRadius: 0}}>
        <Menu.Item header>Food Truck TrackR</Menu.Item>
      </Menu>

      <Route exact path="/">
        <Segment basic>
          <Grid
            columns={2}
            divided
            stackable
            textAlign="center"
            style={{
              marginTop: "6vw",
              marginBottom: "1vw",
            }}
          >
            <Grid.Row>
              <Header
                size="huge"
                textAlign="center"
                style={{marginBottom: "3rem"}}
              >
                Food Truck TrackR connects users <br />
                with their favorite food truck locations in real-time.
              </Header>
            </Grid.Row>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Image src={Food} size="medium" centered />
                <Label as="a" pointing size="huge" color="yellow">
                  <Link to="/diner" style={{opacity: 1}}>
                    Diner
                  </Link>
                </Label>
              </Grid.Column>

              <Grid.Column>
                <Image src={FoodTruck} size="medium" centered />
                <Label as="a" pointing size="huge" color="blue">
                  <Link to="/operator" style={{opacity: 1}}>
                    Operator
                  </Link>
                </Label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Route>

      <Switch>
        <Route exact path="/diner" component={DinerLogin} />
        <Route exact path="/operator" component={OperatorLogin} />
        <Route exact path='/register' component={RegisterForm} />
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
