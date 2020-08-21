import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchOperatorData} from "../../actions";
import {Header, Segment, Icon} from "semantic-ui-react";

const TruckList = (props) => {
  useEffect(() => {
    props.fetchOperatorData();
  }, []);
  return (
    <>
      <h3>Food Trucks</h3>

      {props.truck.map((t) => (
        <Segment vertical key={t.id}>
          <Header size="large">{t.truckName}</Header>
          <p>{t.cuisineType}</p>
          Edit <Icon name="pencil" />
          Delete <Icon name="delete" />
        </Segment>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    truck: state.operator.truck,
  };
};

export default connect(mapStateToProps, {fetchOperatorData})(TruckList);
