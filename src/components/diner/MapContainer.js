import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'

import { Card, Icon, Image} from "semantic-ui-react";


const mapStyles = {
    width: '100%',
    height: '100%'
  };


function MapContainer(props) {
    const [mapCenter, setMapCenter] = useState()

    const handleClick = (propsMarker) => {
        props.setInfoWindow({
            visible: true,
            position: propsMarker.position,
            currentTruck: propsMarker.data_truck
        })
    }
    useEffect(() => {
        console.log('asd');
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                setMapCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              })
            })
          }
    })

    return(
        <Map
            google={props.google}
            zoom={16}
            style={mapStyles}
            center={mapCenter}
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
                props.truck.map(t => {
                    return <Marker 
                        name={'current Location'} 
                        position={{lat: t.currentLocation.lat,
                            lng: t.currentLocation.lng}}
                        data_truck={t}
                        onClick={handleClick}/>
                })
            }
            <InfoWindow visible={props.infoWindow.visible} position={props.infoWindow.position} style={{top: -60}}>
                <Card>
                    <Image
                    src={props.infoWindow.currentTruck.imageOfTruck}
                    alt={`${props.infoWindow.currentTruck.cuisineType} food truck`}
                    wrapped
                    ui={false}
                    />
                    <Card.Content>
                    <Card.Header>{props.infoWindow.currentTruck.truckName}</Card.Header>

                    <Card.Meta>
                        <span className="date">
                        Date: {props.infoWindow.currentTruck.currentLocation.departureTime.date}
                        </span>
                        <span className="date">
                        Time: {props.infoWindow.currentTruck.currentLocation.departureTime.time}
                        </span>
                    </Card.Meta>
                    <Card.Description>Cuisine: {props.infoWindow.currentTruck.cuisineType}</Card.Description>
                    <Card.Description>
                        Current Location: {props.infoWindow.currentTruck.currentLocation.location}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <Icon name="star" />
                    Average Rating: {props.infoWindow.currentTruck.customerRatingAvg}
                    </Card.Content>
                </Card>
            </InfoWindow>
    
            
        </Map>
    )
}

const mapStateToProps = (state) => {
    return {
      truck: state.operator.truck,
    };
  };
  

export default connect(mapStateToProps)( GoogleApiWrapper({
    apiKey: 'AIzaSyAKgYAy4mmkRtFlnYenEWKjuZPZ2c-JbMs'
})(MapContainer))
