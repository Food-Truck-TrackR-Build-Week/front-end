import React from "react";
import {useHistory} from "react-router-dom";
import {Menu, Icon} from "semantic-ui-react";

const Header = () => {
  const {push} = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    push("/");
  };

  return (
    <>
      <Menu inverted size="massive" style={{borderRadius: 0}}>
        <Menu.Item header>Food Truck TrackR</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="setting" />
          </Menu.Item>
          <Menu.Item>
            <Icon
              name="log out"
              onClick={handleLogout}
              style={{cursor: "pointer"}}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Header;
