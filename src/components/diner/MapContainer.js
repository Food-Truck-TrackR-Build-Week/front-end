import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'


const mapStyles = {
    width: '100%',
    height: '100%'
  };


function MapContainer(props) {

    const [infoWindow, setInfoWindow] = useState({
        visible: false,
        marker: ''
    })
    const handleClick = (props, marker, e) => {
        if(marker !== infoWindow.marker) {
            setInfoWindow({
                visible: true,
                marker: marker
            })
        }
        
    }
    return(
        <Map
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
            lat: -1.2884,
            lng: 36.8233
            }}
        >
            <Marker 
                name={'current Location'} 
                position={{lat: -1.2884,
            lng: 36.8233}}
            onClick={handleClick}/>

            <Marker 
                name={'current Location'} 
                position={{lat: -1.2899,
            lng: 36.8290}}
            onClick={handleClick}/>

            <InfoWindow visible={infoWindow.visible} marker={infoWindow.marker}><p>let me know hows looking</p></InfoWindow>
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAKgYAy4mmkRtFlnYenEWKjuZPZ2c-JbMs'
})(MapContainer)