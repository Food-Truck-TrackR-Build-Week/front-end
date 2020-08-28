import React from 'react';
import { Segment } from 'semantic-ui-react';

import AddTruckForm from './AddTruckForm';
import Truck from './Truck';

const TruckList = (props) => {
  console.log('props', props);
  return (
    <>
      <Segment vertical textAlign='center'>
        <AddTruckForm operatorId={props.operatorId} />
      </Segment>
      {props.trucks ? null : <h3>Food Trucks</h3>}

      {props.trucks.map((truck) => (
        <Truck
          setShowTruckById={props.setShowTruckById}
          key={truck.id}
          truck={truck}
          isOnline={props.isOnline}
        />
      ))}
    </>
  );
};

export default TruckList;
