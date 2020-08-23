import React from "react";

import Header from "../../components/Header";
import TruckList from "./TruckList";
import FoodTruck from "./FoodTruck";

import {Container, Grid, Segment} from "semantic-ui-react";

const OperatorDashboard = () => {
  return (
    <>
      <Header />
      <Container fluid style={{padding: "2rem"}}>
        <Grid columns={2}>
          <Grid.Column computer={4} tablet={6} mobile={16}>
            <Segment>
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
