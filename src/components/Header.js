import React from "react";
import {Menu, Icon} from "semantic-ui-react";

const Header = () => {
  return (
    <>
      <Menu inverted size="massive" style={{borderRadius: 0}}>
        <Menu.Item header>Food Truck TrackR</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="setting" />
          </Menu.Item>
          <Menu.Item>
            <Icon name="log out" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Header;
