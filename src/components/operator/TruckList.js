import React, {useEffect} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {menuState} from "../../utils/initialMenuState";
import {connect} from "react-redux";
import {fetchOperatorData} from "../../actions";
import {Header, Segment} from "semantic-ui-react";

import AddTruckForm from "./AddTruckForm";

const TruckList = (props) => {
  useEffect(() => {
    props.fetchOperatorData();
  }, []);

  console.log(props.trucks);

  return (
    <>
      <Segment vertical textAlign="center">
        <AddTruckForm />
      </Segment>
      <h3>Food Trucks</h3>
      {console.log(props.trucks)}
      {props.trucks.map((truck) => (
        <Segment key={truck.id} vertical>
          <Header
            size="large"
            onClick={() => {
              props.setShowTruckById(truck.id);
            }}
            style={{cursor: "pointer"}}
          >
            {truck.name}
          </Header>
          <p>Cuisine: {truck.cuisineType}</p>
        </Segment>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    trucks: state.operator.trucksOwned,
  };
};

export default connect(mapStateToProps, {fetchOperatorData})(TruckList);
