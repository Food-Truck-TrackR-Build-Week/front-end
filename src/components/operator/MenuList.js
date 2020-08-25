import React, {useState} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {menuState} from "../../utils/initialMenuState";
import {Icon, Button, Item} from "semantic-ui-react";

const MenuList = (props) => {
  //Todo: create Update and Delete function for menu items

  // const [itemToEdit, setItemToEdit] = useState(menuState);

  // // const updateMenu = () => {

  // // }

  // const handleDeleteTruck = () => {

  // }

  return (
    <>
      <h2>Menu</h2>

      <div>
        <Item.Group divided>
          {props.truck.menu.map((item) => (
            <Item key={item.id}>
              {/* <Item.Image src={item.image} size="tiny" /> */}

              <Item.Content>
                <Item.Header as="h3">{item.itemName}</Item.Header>
                <Item.Meta as="h4">
                  <Icon name="dollar sign" /> {item.itemPrice}
                </Item.Meta>
                <Item.Description>{item.itemDescription}</Item.Description>
                <Item.Extra>
                  <Button.Group basic size="mini">
                    <Button>
                      <Icon name="pencil" /> Edit
                    </Button>
                    <Button>
                      <Icon name="delete" /> Delete
                    </Button>
                  </Button.Group>
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </div>
    </>
  );
};

export default MenuList;
