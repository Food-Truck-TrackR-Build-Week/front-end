import React from "react";
import {connect} from "react-redux";
import {BrowserRouter as Switch, Route, Link} from "react-router-dom";

import AddTruckForm from "./AddTruckForm";
import FoodTruck from "./FoodTruck";
import {Container, Card, Icon, Image} from "semantic-ui-react";

const OperatorDashboard = (props) => {
  return (
    <Container>
      <h1>Operator Dashboard component</h1>

      <AddTruckForm />
      {props.truck.map((t) => (
        <Link to="/truck" key={t.truckName}>
          <Card>
            <Image
              src={t.imageOfTruck}
              alt={`${t.cuisineType} food truck`}
              wrapped
              ui={false}
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
        </Link>
      ))}

      <Switch>
        <Route exact path="/truck" component={FoodTruck} />
      </Switch>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    truck: state.operator.truck,
  };
};

export default connect(mapStateToProps)(OperatorDashboard);
