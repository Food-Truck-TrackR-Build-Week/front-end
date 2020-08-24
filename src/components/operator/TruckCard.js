import React from "react";
import {Card, Icon, Image, Header, Rating} from "semantic-ui-react";

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
                <Icon name="clock" />
                Departure Time: {props.truck.departureTime}
              </span>
            </Card.Meta>
            <Card.Description>
              <Icon name="food" />
              Cuisine: {props.truck.cuisineType}
            </Card.Description>
            <Card.Description>
              <Icon name="map pin" />
              Location: {props.truck.currentLocation.location}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            Average Rating:
            <br />
            <Rating
              maxRating={5}
              defaultRating={props.truck.customerRatingAvg}
              icon="star"
              disabled
              size="large"
              style={{marginTop: ".75rem"}}
            />
          </Card.Content>
        </Card>
      </div>
    </>
  );
};

export default TruckCard;
