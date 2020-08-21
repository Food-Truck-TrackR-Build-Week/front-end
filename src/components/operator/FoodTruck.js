import React, {useState} from "react";
import {connect} from "react-redux";
import {
  Container,
  Grid,
  Segment,
  Card,
  Icon,
  Image,
  Header,
} from "semantic-ui-react";
import AddMenuForm from "./AddMenuForm";
import MenuList from "./MenuList";

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
      {props.truck.map((t) => (
        <Grid key={t.id}>
          <Grid.Row>
            <Grid.Column computer={6} tablet={16}>
              <Header size="large">{t.truckName}</Header>

              {/* <Segment> */}
              <Card fluid>
                <Image
                  src={t.imageOfTruck}
                  alt={`${t.cuisineType} food truck`}
                  fluid
                />
                <Card.Content>
                  <Card.Header></Card.Header>

                  <Card.Meta>
                    <span className="date">
                      Date: {t.currentLocation.departureTime.date}
                    </span>
                    <span className="date">
                      Time: {t.currentLocation.departureTime.time}
                    </span>
                  </Card.Meta>
                  <Card.Description>Cuisine: {t.cuisineType}</Card.Description>
                  <Card.Description>
                    Current Location: {t.currentLocation.location}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="star" />
                  Average Rating: {t.customerRatingAvg}
                </Card.Content>
              </Card>
              {/* </Segment> */}
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
                    {t.customerRatings.map((rating) => (
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
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    truck: state.operator.truck,
  };
};

export default connect(mapStateToProps)(FoodTruck);
