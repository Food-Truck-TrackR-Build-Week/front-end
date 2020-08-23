import React from "react";
import {Card, Icon, Image, Header} from "semantic-ui-react";

const TruckCard = (props) => {
  return (
    <>
      <div>
        <Header size="large">{props.truck.name}</Header>

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
                Departure Time: {props.truck.departureTime}
              </span>
            </Card.Meta>
            <Card.Description>
              Cuisine: {props.truck.cuisineType}
            </Card.Description>
            <Card.Description>
              Current Location: {props.truck.currentLocation}
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
