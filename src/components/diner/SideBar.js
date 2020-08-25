import React from 'react';
import { connect } from 'react-redux';
import { Segment, Input, Container, List, Image, Header, Button, Icon } from 'semantic-ui-react';


const SideBarStyle = {
  position: "absolute",
  top: 70,
  left: 10,
  width: 350,
  bottom: 10,
  zIndex: 100,
  
}

const listImageStyle = {
  width: 60,
  height: 60
}

const listStyle = {
  "& :hover": {
    backgroundColor: 'red !important' ,
  }
}



function SideBar(props) {


    return(
      <>
        
        <Segment style={SideBarStyle} inverted>
          <Input action='Search' placeholder='Search...' style={{width: "100%"}} action={{color:'red', content: 'Search',}}/>
          <Container>


            <Button onClick={() => {props.setDestination(null)}}>clear</Button>
            <List selection verticalAlign='middle' size="large" inverted >
              {
                props.truck.map((t, index) => (
                  <List.Item key={index} onClick={(e) => {
                    props.setInfoWindow({
                      visible: true,
                      position: {lat: t.currentLocation.lat, lng: t.currentLocation.lng},
                      currentTruck: t
                    })
                  }} style={listStyle}>
                    <List.Content floated='right'>
                      <Button icon onClick={(e) => {
                        e.stopPropagation()
                        props.setDestination({
                          location: {
                            lat: t.currentLocation.lat, 
                            lng: t.currentLocation.lng
                          },
                          truckName: t.truckName
                        })
                      }}><Icon name="location arrow" color='black'/></Button>
                    </List.Content>
                    <Image src={t.imageOfTruck} style={listImageStyle}/>
                    <List.Content>
                      <List.Header>{t.truckName}</List.Header>
                      <Header as='h5' disabled>
                        {t.currentLocation.location}
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
      </>
    )
}

const mapStateToProps = (state) => {
    return {
      truck: state.operator.truck,
    };
  };
  

export default connect(mapStateToProps)(SideBar)