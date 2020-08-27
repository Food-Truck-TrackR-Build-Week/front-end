import React from "react";
import {Header, Segment, Radio} from "semantic-ui-react";

const Truck = (props) => {
  return (
    <>
      <Segment vertical>
        <Header
          size="large"
          onClick={() => {
            props.setShowTruckById(props.truck.id);
          }}
          style={{cursor: "pointer"}}
        >
          {props.truck.name}
        </Header>
        <p>Cuisine: {props.truck.cuisineType}</p>
        <Radio slider label="Online" />
      </Segment>
    </>
  );
};

export default Truck;
