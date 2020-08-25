import React, {useState} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {useParams} from "react-router-dom";
import {menuState} from "../../utils/initialMenuState";
import {Button, Modal, Icon, Form} from "semantic-ui-react";

const AddMenuForm = () => {
  const [open, setOpen] = useState(false);
  const [menuItem, setMenuItem] = useState(menuState);
  const {id} = useParams();

  const handleChange = (e) => {
    setMenuItem({
      ...menuItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/api/menus/${id}`, menuItem)
      .then((res) => {
        console.log(res.data);
        setMenuItem(menuItem);
      })
      .catch((err) => {
        console.error(err);
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
                <label>Price</label>
                <input
                  name="itemPrice"
                  type="number"
                  value={menuItem.itemPrice}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Photos</label>
                <input
                  name="itemPhotos"
                  type="text"
                  value={menuItem.itemPhotos}
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
