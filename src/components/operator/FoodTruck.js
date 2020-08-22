import React, {useState} from "react";
import {Container, Grid, Segment} from "semantic-ui-react";
import AddMenuForm from "./AddMenuForm";
import MenuList from "./MenuList";
import TruckCard from "./TruckCard";

import Chart from "react-apexcharts";

//Operator should be able to edit, delete, add menu items, see ratings
const FoodTruck = (props) => {
  const [chart, setChart] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  });
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column computer={6} tablet={16}>
            <TruckCard truck={props.truck} />
          </Grid.Column>
          <Grid.Column computer={10} tablet={16}>
            <Grid columns="equal">
              <Grid.Column>
                <Chart
                  options={chart.options}
                  series={chart.series}
                  type="donut"
                />
              </Grid.Column>
              <Grid.Column>
                <Segment.Group>
                  {props.truck.customerRatings.map((rating) => (
                    <Segment key={rating}>{rating}</Segment>
                  ))}
                </Segment.Group>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment vertical textAlign="right">
              <AddMenuForm />
            </Segment>

            <Segment vertical>
              <MenuList />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default FoodTruck;
