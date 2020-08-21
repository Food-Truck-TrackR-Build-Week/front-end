import React, {useState} from "react";
import {Button, Modal, Icon, Form} from "semantic-ui-react";

const AddMenuForm = () => {
  const [open, setOpen] = useState(false);
  const [menuItem, setMenuItem] = useState({
    itemName: "",
    itemDescription: "",
    itemPhotos: [],
    itemPrice: "",
  });

  const handleChange = (e) => {
    setMenuItem({
      ...menuItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Have create action that will post to menu in reducers

    setMenuItem({
      itemName: "",
      itemDescription: "",
      itemPhotos: [],
      itemPrice: "",
    });

    setOpen(false);
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button>
            <Icon name="add" />
            Add Menu Item
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
                  value={menuItem.itemName}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input
                  name="itemDescription"
                  placeholder=""
                  value={menuItem.itemDescription}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Photos</label>
                <input
                  name="itemPhotos"
                  type="file"
                  multiple
                  value={menuItem.itemPhotos}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Price</label>
                <input
                  name="itemPrice"
                  type="number"
                  value={menuItem.itemPrice}
                  onChange={handleChange}
                />
              </Form.Field>
              <Button type="submit">
                <Icon name="add" /> Add Item
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default AddMenuForm;
