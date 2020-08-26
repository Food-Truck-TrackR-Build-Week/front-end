import React, {useState} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {menuState} from "../../utils/initialMenuState";
import {
  Icon,
  Button,
  Item,
  Modal,
  Form,
  ItemDescription,
} from "semantic-ui-react";

const MenuList = (props) => {
  const [open, setOpen] = useState(false);
  //Todo: create Update and Delete function for menu items

  const [itemToEdit, setItemToEdit] = useState(menuState);

  const updateMenu = () => {
    console.log("Item to edit comma", itemToEdit);

    axiosWithAuth()
      .put(`/api/trucks/100001/menu/${itemToEdit.menuItemId}`, {
        // id: itemToEdit.menuItemId,
        itemName: itemToEdit.itemName,
        itemDescription: itemToEdit.itemDescription,
        itemPrice: itemToEdit.itemPrice,
        // itemPhotos: itemToEdit.itemPhotos,
      })
      .then((res) => {
        console.log(res.data);
        setItemToEdit(itemToEdit);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteTruck = (itemToEdit) => {
    axiosWithAuth()
      .delete(
        `/api/trucks/${props.truck.id}/menu/${itemToEdit.menuItemId}`,
        itemToEdit
      )
      .then((res) => {})
      .catch((err) => console.error(err.message));
  };

  const handleChange = (e) => {
    setItemToEdit({
      ...itemToEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateMenu();

    setOpen(false);
  };

  return (
    <>
      <h2>Menu</h2>

      <div>
        <Item.Group divided>
          {props.truck.menu.map((item) => (
            <Item key={item.id}>
              <Item.Content>
                <Item.Header as="h3">{item.itemName}</Item.Header>
                <Item.Meta as="h4">
                  <Icon name="dollar sign" /> {item.itemPrice}
                </Item.Meta>
                <Item.Description>{item.itemDescription}</Item.Description>
                <Item.Extra>
                  <Button.Group basic size="mini">
                    <Modal
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                      open={open}
                      trigger={
                        <Button>
                          <Icon name="pencil" /> Edit
                        </Button>
                      }
                    >
                      <Modal.Header>Add Menu Item</Modal.Header>
                      <Modal.Content>
                        <Modal.Description>
                          <Form onSubmit={handleSubmit}>
                            <Form.Field>
                              <label>Name</label>
                              <input
                                name="itemName"
                                placeholder="ex. French Fries"
                                value={itemToEdit.itemName}
                                onChange={handleChange}
                              />
                            </Form.Field>
                            <Form.Field>
                              <label>Description</label>
                              <input
                                name="itemDescription"
                                placeholder="Describe Menu Item"
                                value={item.itemDescription}
                                onChange={handleChange}
                              />
                            </Form.Field>
                            <Form.Field>
                              <label>Price</label>
                              <input
                                name="itemPrice"
                                type="number"
                                placeholder="0.00"
                                value={item.itemPrice}
                                onChange={handleChange}
                              />
                            </Form.Field>
                            <Form.Field>
                              <label>Item Photos</label>
                              <input
                                name="itemPhotos"
                                type="text"
                                placeholder="Enter Image URL's"
                                value={item.itemPhotos}
                                onChange={handleChange}
                              />
                            </Form.Field>
                            <Button type="submit">
                              <Icon name="add" /> Update Item
                            </Button>
                          </Form>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>

                    <Button onClick={handleDeleteTruck}>
                      <Icon name="delete" /> Delete
                    </Button>
                  </Button.Group>
                </Item.Extra>
              </Item.Content>
              {item.itemPhotos.map((image) => (
                <Item.Image key={image} src={image} size="tiny" />
              ))}
            </Item>
          ))}
        </Item.Group>
      </div>
    </>
  );
};

export default MenuList;
