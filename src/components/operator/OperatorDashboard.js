import React from "react";
import {connect} from "react-redux";

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
        {props.trucks.map((truck) => (
          <Grid key={Date.now()} columns={2}>
            <Grid.Column computer={4} tablet={6} mobile={16}>
              <Segment>
                <Segment vertical textAlign="center">
                  <AddTruckForm />
                </Segment>

                <TruckList truck={truck} />
              </Segment>
            </Grid.Column>

            <Grid.Column computer={12} tablet={10} mobile={16}>
              <FoodTruck truck={truck} />
            </Grid.Column>
          </Grid>
        ))}
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
