import React from "react";
// import {connect} from "react-redux";
// import {BrowserRouter as Switch, Route, Link} from "react-router-dom";

import Header from "../../components/Header";
import AddTruckForm from "./AddTruckForm";
import TruckList from "./TruckList";
import FoodTruck from "./FoodTruck";

import {Container, Card, Icon, Image, Grid, Segment} from "semantic-ui-react";

const OperatorDashboard = (props) => {
  return (
    <>
      <Header />
      <Container fluid style={{padding: "2rem"}}>
        <Grid columns={2}>
          <Grid.Column computer={4} tablet={6} mobile={16}>
            <Segment>
              <Segment vertical textAlign="center">
                <AddTruckForm />
              </Segment>

              <TruckList />
            </Segment>
          </Grid.Column>

          <Grid.Column computer={12} tablet={10} mobile={16}>
            <FoodTruck />
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default OperatorDashboard;
