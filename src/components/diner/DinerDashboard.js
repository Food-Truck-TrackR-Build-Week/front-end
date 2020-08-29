import React, { useState, useEffect } from "react";
import MapContainer from "./MapContainer";
import {connect} from "react-redux";
import SideBar from "./SideBar";
import {
  fetchTruckData,
  fetchDinerInfo,
  addFavoriteTruck,
  deleteFavoriteTruck,
  addTruckRating,
  addMenuRating
} from "../../actions";
import ClearRoute from "./ClearRoute";
import { Menu } from "semantic-ui-react";
import Header from "../Header";

const DinerDashboard = (props) => {
  const [infoWindow, setInfoWindow] = useState({
      visible: false,
      position: {},
      currentTruck: {
        truckName: "The Big Daddy",
        imageOfTruck:
          "https://images.unsplash.com/photo-1576595879571-5402d294c407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80",
        cuisineType: "Latin Cuisine",
        customerRatings: [3, 4, 2, 4],
        customerRatingAvg: 4,
        menu: [],
        currentLocation: ""
      }
    })

    const [destination, setDestination] = useState(null)
    const [milesRadius, setMilesRadius] = useState(1)
    const [mapCenter, setMapCenter] = useState({})
    const [myLocation, setMyLocation] = useState('')
    useEffect(() => {
      props.fetchTruckData()
      props.fetchDinerInfo(localStorage.getItem('dinerId'))
    },[])

    useEffect(() => {
      if(infoWindow.visible) {
        let temp = props.trucks.filter(truck => {
          return truck.id === infoWindow.currentTruck.id
        })
        setInfoWindow({
          ...infoWindow,
          currentTruck: temp[0]
        })
        console.log(infoWindow);
      }
    }, [props.trucks])


    const RecenterMap = (location) => {
      setMapCenter(location)
    }

  return (
    <>
      <Header />
      <ClearRoute destination={destination} setDestination={setDestination} RecenterMap={RecenterMap} myLocation={myLocation}/>
      <SideBar 
        infoWindow={infoWindow}
        setInfoWindow={setInfoWindow}
        destination={destination}
        setDestination={setDestination}
        trucks={props.trucks}
        userInfo={props.userInfo}
        milesRadius={milesRadius}
        setMilesRadius={setMilesRadius}
        RecenterMap={RecenterMap}
        myLocation={myLocation}
        addFavoriteTruck={props.addFavoriteTruck}
        deleteFavoriteTruck={props.deleteFavoriteTruck}
        addTruckRating={props.addTruckRating}
        addMenuRating={props.addMenuRating}
      />
      <MapContainer 
        infoWindow={infoWindow}
        setInfoWindow={setInfoWindow}
        destination={destination}
        trucks={props.trucks}
        userInfo={props.userInfo}
        milesRadius={milesRadius}
        mapCenter={mapCenter}
        setMapCenter={setMapCenter}
        myLocation={myLocation}
        setMyLocation={setMyLocation}
      />
    </>
      
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.diner.userInfo,
    trucks: state.diner.trucks,
  };
};


export default connect(mapStateToProps, {
  fetchTruckData,
  fetchDinerInfo,
  addFavoriteTruck,
  deleteFavoriteTruck,
  addTruckRating,
  addMenuRating
})(DinerDashboard)
