import React, {useState} from "react";
import {Header, Segment, Radio} from "semantic-ui-react";

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
        <Radio slider label="Online" onChange={handleChange} />
      </Segment>
    </>
  );
};

export default Truck;
