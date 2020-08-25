import React from 'react';
import Autocomplete from 'react-google-autocomplete';


function LocationFinder(props) {
    
    return( 
        <Autocomplete
            apiKey={'AIzaSyAKgYAy4mmkRtFlnYenEWKjuZPZ2c-JbMs'}
            style={{width: '90%'}}
            onPlaceSelected={(place) => {
            console.log(place.geometry.location.lat());
            }}
            types={['address']}
        />
    )
}

export default LocationFinder