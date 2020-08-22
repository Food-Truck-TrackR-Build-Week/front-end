import React from "react";
import {connect} from "react-redux";
// import {BrowserRouter as Switch, Route, Link} from "react-router-dom";

import Header from "../../components/Header";
import AddTruckForm from "./AddTruckForm";
import TruckList from "./TruckList";
import FoodTruck from "./FoodTruck";

import {Container, Grid, Segment} from "semantic-ui-react";

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
            {props.trucks.map((truck) => (
              <FoodTruck key={truck.id} truck={truck} />
            ))}
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    trucks: state.operator.truck,
  };
};

export default connect(mapStateToProps)(OperatorDashboard);
