import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {fetchOperatorData} from "../../actions";
import Header from "../../components/Header";
import TruckList from "./TruckList";
import FoodTruck from "./FoodTruck";

import {Container, Grid, Segment, Image, Message} from "semantic-ui-react";
import FoodTruckImg from "../../images/undraw_street_food_hm5i.svg";

const OperatorDashboard = (props) => {
  const [showTruckById, setShowTruckById] = useState(null);

  // useEffect(() => {
  //   props.fetchOperatorData(props.operatorId);
  // }, []);

  return (
    <>
      <Header />
      <Container fluid style={{padding: "2rem"}}>
        <Grid columns={2}>
          <Grid.Column computer={4} tablet={6} mobile={16}>
            <Segment raised>
              <TruckList
                operatorId={props.operatorId}
                showTruckById={showTruckById}
                setShowTruckById={setShowTruckById}
              />
            </Segment>
          </Grid.Column>

          <Grid.Column computer={12} tablet={10} mobile={16}>
            {showTruckById === null ? (
              <Segment basic>
                {console.log("SR : Trucks", props.trucks)}
                {props.trucks.length === 0 ? (
                  <Message
                    floating
                    content="Add a food truck to get started"
                    info
                    size="large"
                  />
                ) : (
                  <Message
                    floating
                    content="Click on then food truck name to show more details"
                    info
                    size="large"
                  />
                )}

                <Image
                  src={FoodTruckImg}
                  size="huge"
                  centered
                  style={{opacity: 0.4}}
                />
              </Segment>
            ) : (
              <FoodTruck
                operatorId={props.operatorId}
                showTruckById={showTruckById}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // operatorId: state.operator.operatorInfo.id,
    trucks: state.operator.operatorInfo.trucksOwned,
  };
};

export default connect(mapStateToProps, {fetchOperatorData})(OperatorDashboard);
