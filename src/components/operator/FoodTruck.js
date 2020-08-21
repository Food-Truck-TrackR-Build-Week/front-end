import React from "react";
import {connect} from "react-redux";
import {Container, Grid, Segment, Card, Icon, Image} from "semantic-ui-react";
import AddMenuForm from "./AddMenuForm";
import MenuList from "./MenuList";

//Operator should be able to edit, delete, add menu items, see ratings
const FoodTruck = (props) => {
  return (
    <Container>
      {props.truck.map((t) => (
        <Grid key={t.truckName}>
          <Grid.Row>
            <Grid.Column width={8}>
              {/* <Segment> */}
              <Card fluid>
                <Image
                  src={t.imageOfTruck}
                  alt={`${t.cuisineType} food truck`}
                  fluid
                />
                <Card.Content>
                  <Card.Header>{t.truckName}</Card.Header>

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

            <Grid.Column width={8}>
              <Segment textAlign="center">
                <AddMenuForm />
              </Segment>
              <Segment>
                <MenuList />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Segment>
                User Ratings
                <Card.Group>
                  {t.customerRatings.map((rating) => (
                    <Card key={rating}>
                      <Card.Content>
                        <Card.Header> {rating}</Card.Header>
                        <Card.Meta>User</Card.Meta>
                      </Card.Content>
                    </Card>
                  ))}
                </Card.Group>
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
