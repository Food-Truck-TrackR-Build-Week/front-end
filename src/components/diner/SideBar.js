import React from 'react';
import { connect } from 'react-redux';
import { Segment, Input, Container, List, Image, Header } from 'semantic-ui-react';

const SideBarStyle = {
  position: "absolute",
  top: 70,
  left: 30,
  width: 300,
  bottom: 70,
  zIndex: 100,
}

const listImageStyle = {
  width: 60,
  height: 60
}



function SideBar(props) {
  
  
  
  
  const handleClick = (t, index) => {
    
  }
    return(
        <Segment style={SideBarStyle}>
          <Input action='Search' placeholder='Search...' />
          <Container>
            <List selection verticalAlign='middle' size="big">
              {
                props.truck.map((t, index) => (
                  <List.Item onClick={(e) => {
                    props.setInfoWindow({
                      visible: true,
                      position: {lat: t.currentLocation.lat, lng: t.currentLocation.lng},
                      currentTruck: t
                    })
                  }}>
                    <Image avatar src={t.imageOfTruck} style={listImageStyle}/>
                    <List.Content>
                      <List.Header>{t.truckName}</List.Header>
                      <Header as='h5' disabled>
                        Disabled Header
                      </Header>
                      <Header as='h5' disabled>
                        Disabled Header
                      </Header>
                    </List.Content>
                  </List.Item>
                ))
              }
              
            </List>
          </Container>
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
      truck: state.operator.truck,
    };
  };
  

export default connect(mapStateToProps)(SideBar)