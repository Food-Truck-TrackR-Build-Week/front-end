import React, { useState, useEffect } from "react";
import MapContainer from "./MapContainer";
import {connect} from "react-redux";
import SideBar from "./SideBar";
import {fetchTruckData} from "../../actions";
import ClearRoute from "./ClearRoute";
import { Menu } from "semantic-ui-react";

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
        currentLocation: {
          lat: -1.2884,
          lng: 36.8233,
          location: "Soho, NYC",
          departureTime: {
            date: "08/20/20",
            time: "12:48AM",
          },
        }
      }
    })

    const [destination, setDestination] = useState(null)

    useEffect(() => {
      props.fetchTruckData()
    },[])

  return (
    <>
      <Menu inverted size="massive" style={{borderRadius: 0, marginBottom: 0, position: "fixed", zIndex: 100, left: 0, right: 0}}>
        <Menu.Item header>Food Truck TrackR</Menu.Item>
      </Menu>
      <ClearRoute destination={destination} setDestination={setDestination}/>
      <SideBar infoWindow={infoWindow} setInfoWindow={setInfoWindow} destination={destination} setDestination={setDestination} trucks={props.trucks}/>
      <MapContainer infoWindow={infoWindow} setInfoWindow={setInfoWindow} destination={destination} trucks={props.trucks}/>
    </>
      
  );
};

const mapStateToProps = (state) => {
  return {
    trucks: state.diner.trucks,
  };
};


export default connect(mapStateToProps, {fetchTruckData})(DinerDashboard)
