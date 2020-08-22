import React, { useState } from "react";
import MapContainer from "./MapContainer";
import SideBar from "./SideBar";

const DinerDashboard = () => {
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

  return (
    <>
      <SideBar infoWindow={infoWindow} setInfoWindow={setInfoWindow}/>
      <MapContainer infoWindow={infoWindow} setInfoWindow={setInfoWindow}/>
    </>
      
  );
};

export default DinerDashboard;
