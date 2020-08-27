import React from "react";
import Autocomplete from "react-google-autocomplete";

function LocationFinder(props) {
  return (
    <Autocomplete
      apiKey={"AIzaSyAKgYAy4mmkRtFlnYenEWKjuZPZ2c-JbMs"}
      onPlaceSelected={(place) => {
        console.log(
          `${place.geometry.location.lat()}, ${place.geometry.location.lng()}`
        );
      }}
      types={["address"]}
    />
  );
}

export default LocationFinder;
