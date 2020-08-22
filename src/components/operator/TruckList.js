import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchOperatorData} from "../../actions";
import {Header, Segment, Icon} from "semantic-ui-react";

const TruckList = (props) => {
  useEffect(() => {
    props.fetchOperatorData();
  });
  return (
    <>
      <h3>Food Trucks</h3>

      <Segment vertical>
        <Header size="large">{props.truck.truckName}</Header>
        <p>Cuisine: {props.truck.cuisineType}</p>
        Edit <Icon name="pencil" />
        Delete <Icon name="delete" />
      </Segment>
    </>
  );
};

export default connect(null, {fetchOperatorData})(TruckList);
