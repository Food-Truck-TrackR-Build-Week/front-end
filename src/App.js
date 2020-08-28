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
import LocationFinder from "./components/operator/LocationFinder";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Menu inverted size="massive" style={{borderRadius: 0}}>
        <Menu.Item header>Food Truck TrackR</Menu.Item>
      </Menu>
      <Switch>
        <PrivateRoute exact path="/home" component={DinerDashboard} />

        <Route exact path="/diner" component={DinerLogin} />
        <PrivateRoute
          exact
          path="/operator/dashboard"
          component={OperatorDashboard}
        />
        <Route exact path="/operator" component={OperatorLogin} />
        <Route exact path="/image-editor" component={ImageEditor} />
        <Route exact path="/location-finder" component={LocationFinder} />

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
                <Grid.Column width={5}>
                  <Image src={Food} size="medium" centered />
                  <Label pointing size="huge" color="yellow">
                    <Link to="/diner" style={{opacity: 1}}>
                      Diner
                    </Link>
                  </Label>
                </Grid.Column>

                <Grid.Column width={5}>
                  <Image src={FoodTruck} size="medium" centered />
                  <Label pointing size="huge" color="blue">
                    <Link to="/operator" style={{opacity: 1}}>
                      Operator
                    </Link>
                  </Label>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
