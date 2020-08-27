import React from 'react';
import Autocomplete from 'react-google-autocomplete';


function LocationFinder(props) {
    
    return( 
        <Autocomplete
            apiKey={'AIzaSyAKgYAy4mmkRtFlnYenEWKjuZPZ2c-JbMs'}
            style={{width: '90%', marginTop: 100}}
            onPlaceSelected={(place) => {
            console.log(place);
            }}
            types={['address']}
        />
    )
}

export default LocationFinder