import React, {useState} from "react";
import {Header, Segment, Radio, Icon} from "semantic-ui-react";

const Truck = (props) => {
  const [isOnline, setIsOnline] = useState(false);

  const handleChange = () => {
    if (isOnline === false) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }

    console.log("SR : isOnline", isOnline);
  };

  return (
    <>
      <Segment
        vertical
        onClick={() => {
          props.setShowTruckById(props.truck.id);
        }}
        style={{cursor: "pointer", margin: "0 1rem"}}
      >
        <Header size="large">{props.truck.name}</Header>

        <p>
          <Icon name="map pin" size="large" color="red" />

          {props.truck.currentLocation}
        </p>
        <div>
          <p>
            <Icon name="food" size="large" color="yellow" />

            {props.truck.cuisineType}
          </p>
          <Radio slider label="Online" prechecked onChange={handleChange} />
        </div>
      </Segment>
    </>
  );
};

export default Truck;
