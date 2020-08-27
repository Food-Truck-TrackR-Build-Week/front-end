import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
import {mapStyles} from "../../utils/mapStyles"

import { Card, Icon, Image, Grid, Header, List, Rating } from "semantic-ui-react";


const mapStyle = {
    width: '100%',
    height: '100%'
  };

const menuHeaderStyle = {
    marginTop: "10px",
    marginBottom: "20px"
}


function MapContainer(props) {
    const [directionsRenderer] = useState( new props.google.maps.DirectionsRenderer({
        suppressMarkers: true
    }))
    const [directionsService] = useState(new props.google.maps.DirectionsService())

    const [mapCenter, setMapCenter] = useState({})
    const [myLocation, setMyLocation] = useState('')
    const [mapCenterHasBeingSet, setMapCenterHasBeingSet] = useState(false)

    const handleClick = (propsMarker) => {
        props.setInfoWindow({
            visible: true,
            position: propsMarker.position,
            currentTruck: propsMarker.data_truck
        })
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                setMyLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
                console.log(position);
                if(myLocation !== '' && !mapCenterHasBeingSet) {
                    setMapCenter(myLocation)
                    setMapCenterHasBeingSet(true)
                }
            }, function() {
                console.log("error position");
            })
        }
        
    })
    
    useEffect(() => {
        if(props.destination !== null) {
            const request = {
                origin: myLocation,
                destination: props.destination.location,
                travelMode: 'DRIVING'
            };
            console.log(request);
            
            directionsService.route(request, function(result, status) {
                if (status === 'OK') {
                    directionsRenderer.setDirections(result);
                } else {
                    window.alert("Directions request failed due to " + status);
                  }
            }) 
        } else {
            directionsRenderer.setDirections({routes: []})
        }
    },[props.destination])

    const setDirectionsRenderer = (mapProps, map) => {
        directionsRenderer.setMap(map);
    }

    return(
        <Map
            google={props.google}
            disableDefaultUI={true}
            zoom={16}
            style={mapStyle}
            styles={mapStyles}
            center={mapCenter}
            onReady={setDirectionsRenderer}
        >
            <Marker 
                position={mapCenter}
                icon={{
                    path: props.google.maps.SymbolPath.CIRCLE,
                    scale: 8, //tamaño
                    strokeColor: '#00f', //color del borde
                    strokeWeight: 3, //grosor del borde
                    fillColor: '#00f', //color de relleno
                    fillOpacity:.7// opacidad del relleno
                  }}
            />
            {
                props.trucks.map((t, index) => {
                    return <Marker 
                        key={index}
                        name={'current Location'} 
                        position={{lat: 25.598361600000004 + (index+1)/1000,
                            lng: -80.4159488}}
                        data_truck={t}
                        onClick={handleClick}/>
                })
            }
            <InfoWindow visible={props.infoWindow.visible} position={props.infoWindow.position} style={{top: -60}}>
                <Grid columns={2}>
                    <Grid.Column style={{width: '250px'}}>
                        <Card>
                            <Image
                            src={props.infoWindow.currentTruck.imageOfTruck}
                            alt={`${props.infoWindow.currentTruck.cuisineType} food truck`}
                            style={{width: 222, height: 277}}
                            />
                            <Card.Content>
                            <Card.Header>{props.infoWindow.currentTruck.name}</Card.Header>

                            <Card.Meta>
                                <span className="date">
                                Date: {props.infoWindow.currentTruck.departureTime}
                                </span>
                                <span className="date">
                                Time: {props.infoWindow.currentTruck.departureTime}
                                </span>
                            </Card.Meta>
                            <Card.Description>Cuisine: {props.infoWindow.currentTruck.cuisineType}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <Icon name="star" />
                            Average Rating: {props.infoWindow.currentTruck.customerRatingAvg}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column style={{width: '365px'}}>
                        <Header as='h2' textAlign='center' style={menuHeaderStyle}>
                            <Header.Content>Menu</Header.Content>
                        </Header>
                        <div style={{overflow: 'auto', maxHeight: 350, paddingRight: 10}}>
                            <List divided verticalAlign='middle' size="large">
                                {
                                props.infoWindow.currentTruck.menu.map((menu, index) => (
                                    <List.Item key={index} style={{ paddingTop: 10}}>
                                        <Image src={menu.Photos} style={{width: 50, height: 50}}/>
                                        <List.Content style={{width: 265}}>
                                            <List.Header style={{position: 'relative'}}>
                                                {menu.itemName}
                                                <span style={{position: "absolute", right: 0}}>{menu.itemPrice}</span>
                                            </List.Header>
                                            <List.Description>
                                                {menu.itemDescription}
                                            </List.Description>
                                        </List.Content>
                                        <List.Content floated="left" style={{paddingTop: 5}}>
                                            <Rating defaultRating={menu.customerRatingsAvg} maxRating={5} />
                                        </List.Content>
                                    </List.Item>
                                        
                                ))
                                } 
                            </List>
                        </div>
                    </Grid.Column>
                </Grid>
            </InfoWindow>
    
            
        </Map>
    )
}


export default  GoogleApiWrapper({
    apiKey: 'AIzaSyAKgYAy4mmkRtFlnYenEWKjuZPZ2c-JbMs'
})(MapContainer)
