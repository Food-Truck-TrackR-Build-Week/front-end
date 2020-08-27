import React, {useState} from "react";

import Header from "../../components/Header";
import TruckList from "./TruckList";
import FoodTruck from "./FoodTruck";

import {Container, Grid, Segment, Image, Message} from "semantic-ui-react";
import FoodTruckImg from "../../images/undraw_street_food_hm5i.svg";

const OperatorDashboard = () => {
  const [showTruckById, setShowTruckById] = useState(null);

  return (
    <>
      <Header />
      <Container fluid style={{padding: "2rem"}}>
        <Grid columns={2}>
          <Grid.Column computer={4} tablet={6} mobile={16}>
            <Segment raised>
              <TruckList
                setShowTruckById={setShowTruckById}
                showTruckById={showTruckById}
              />
            </Segment>
          </Grid.Column>

          <Grid.Column computer={12} tablet={10} mobile={16}>
            {showTruckById === null ? (
              <Segment basic>
                <Message
                  floating
                  content="Click on then truck name to show more details"
                  info
                  size="large"
                />
                <Image
                  src={FoodTruckImg}
                  size="huge"
                  centered
                  style={{opacity: 0.4}}
                />
              </Segment>
            ) : (
              <FoodTruck showTruckById={showTruckById} />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default OperatorDashboard;
