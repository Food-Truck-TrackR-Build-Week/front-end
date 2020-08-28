import React from "react";
import {Menu} from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <div
        inverted
        size="large"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "auto",
          textAlign: "center",
          padding: "1rem 0",
        }}
      >
        Food Truck TrackR. 2020
      </div>
    </>
  );
};

export default Footer;
