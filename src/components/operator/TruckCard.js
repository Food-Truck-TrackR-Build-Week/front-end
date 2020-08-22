import React from "react";
import {Card, Icon, Image, Header} from "semantic-ui-react";

const TruckCard = (props) => {
  return (
    <>
      <div>
        <Header size="large">{props.truck.truckName}</Header>

        <Card fluid>
          <Image
            src={props.truck.imageOfTruck}
            alt={`${props.truck.cuisineType} food truck`}
            fluid
          />
          <Card.Content>
            <Card.Header></Card.Header>

            <Card.Meta>
              <span className="date">
                Date: {props.truck.currentLocation.departureTime.date}
              </span>
              <span className="date">
                Time: {props.truck.currentLocation.departureTime.time}
              </span>
            </Card.Meta>
            <Card.Description>
              Cuisine: {props.truck.cuisineType}
            </Card.Description>
            <Card.Description>
              Current Location: {props.truck.currentLocation.location}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="star" />
            Average Rating: {props.truck.customerRatingAvg}
          </Card.Content>
        </Card>
      </div>
    </>
  );
};

export default TruckCard;
