import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Segment, Input, Container, List, Image, Header, Button, Icon } from 'semantic-ui-react';


const SideBarStyle = {
  position: "absolute",
  top: 70,
  left: 10,
  width: 350,
  bottom: 10,
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
}

const listImageStyle = {
  width: 60,
  height: 60
}

const milesRadiusSegmentStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: 'none',
  boxShadow: 'none',
  marginBottom: -10,
  paddingLeft: 5,
  paddingRight: 5
}



function SideBar(props) {

  const [searchValue, setSearchValue] = useState('')
  

  const handleOnSearch = (e) => {
    setSearchValue(e.target.value)
  }
  const handleMilesRadiusChange = (e) => {
    props.setMilesRadius(e.target.value)
  }

    return(
      <>
        
        <Segment style={SideBarStyle}>
          <Input  placeholder='Search...' style={{width: "100%"}} onChange={handleOnSearch} value={searchValue}/>
          <Container style={{overflow: 'auto', flexGrow: '1',}}>

            <List selection verticalAlign='middle' size="large" >
              {
                props.trucks.filter(filtertruck => {
                  return filtertruck.name.includes(searchValue) || filtertruck.cuisineType.includes(searchValue)
                }).map((t, index) => {
                  let coordinates = t.currentLocation.split(', ')
                  return(<List.Item key={index} onClick={(e) => {
                    props.setInfoWindow({
                      visible: true,
                      position: {lat: coordinates[0], lng: coordinates[1]},
                      currentTruck: t
                    })
                  }}>
                    <List.Content floated='right'>
                      <Button icon color='green' onClick={(e) => {
                        e.stopPropagation()
                        props.setDestination({
                          location: {
                            lat: parseFloat(coordinates[0]), 
                            lng: parseFloat(coordinates[1])
                          },
                          truckName: t.truckName
                        })
                      }}><Icon name="location arrow"/></Button>
                    </List.Content>
                    <Image src={t.imageOfTruck} style={listImageStyle}/>
                    <List.Content>
                      <List.Header>{t.name}</List.Header>
                      <Header as='h5' disabled>
                        {t.cuisineType}
                      </Header>
                      <Header as='h5' disabled>
                        {t.currentLocation}
                      </Header>
                    </List.Content>
                  </List.Item>)
                })
              }
              
            </List>
            
          </Container>
          <Segment style={milesRadiusSegmentStyle}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10}}>
              <Header as='h5' style={{margin: 0}}>
                Search Radius: {props.milesRadius} Miles
              </Header>
              <input type="range" min="1" max='30' onChange={handleMilesRadiusChange} value={props.milesRadius}/>
            </div>
            
            <Button onClick={props.RecenterMap} primary>Go to My Location</Button>
          </Segment>
        </Segment>
      </>
    )
}

  

export default SideBar