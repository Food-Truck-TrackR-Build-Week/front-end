import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  updateMenuItem,
  removeMenuItem,
  fetchOperatorData
} from '../../actions';
import { Icon, Button, Item, Modal, Form } from 'semantic-ui-react';

const MenuItem = (props) => {
  const [open, setOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(props.menuItem);

  const handleChange = (e) => {
    setItemToEdit({
      ...itemToEdit,
      [e.target.name]: e.target.value
    });
  };

  const updateMenuItem = () => {
    // axiosWithAuth()
    //   .put(`/api/trucks/${props.truck.id}/menu/${itemToEdit.id}`, {
    //     itemName: itemToEdit.itemName,
    //     itemDescription: itemToEdit.itemDescription,
    //     itemPrice: itemToEdit.itemPrice,
    //     itemPhotos: itemToEdit.itemPhotos,
    //   })
    //   .then((res) => {
    //     console.log("SR: UpdateMenuItem: res", res.data);
    //     setItemToEdit(itemToEdit);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  const handleDelete = () => {
    props.removeMenuItem(props.truck.Id, itemToEdit.id);
    props.fetchOperatorData(localStorage.getItem('operatorId'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { itemName, itemDescription, itemPrice } = itemToEdit;

    props.updateMenuItem(props.truck.id, itemToEdit.id, {
      itemName,
      itemDescription,
      itemPrice
    });

    setOpen(false);

    props.fetchOperatorData(localStorage.getItem('operatorId'));
  };

  // truck.id, menuItem.id, itemToEdit;

  return (
    <>
      <Item>
        <Item.Content>
          <Item.Header as='h3'>{props.menuItem.itemName}</Item.Header>
          <Item.Meta as='h4'>
            <Icon name='dollar sign' /> {props.menuItem.itemPrice}.00
          </Item.Meta>
          <Item.Description>{props.menuItem.itemDescription}</Item.Description>
          <Item.Extra>
            <Button.Group basic size='mini'>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                  <Button>
                    <Icon name='pencil' /> Edit
                  </Button>
                }
              >
                <Modal.Header>Update Menu Item</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <Form onSubmit={handleSubmit}>
                      <Form.Field>
                        <label>Name</label>
                        <input
                          name='itemName'
                          placeholder='ex. French Fries'
                          value={itemToEdit.itemName}
                          onChange={handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Description</label>
                        <input
                          name='itemDescription'
                          placeholder='Describe Menu Item'
                          value={itemToEdit.itemDescription}
                          onChange={handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Price</label>
                        <input
                          name='itemPrice'
                          type='number'
                          placeholder='0.00'
                          value={itemToEdit.itemPrice}
                          onChange={handleChange}
                        />
                      </Form.Field>
                      <Button type='submit'>
                        <Icon name='add' /> Update Item
                      </Button>
                    </Form>
                  </Modal.Description>
                </Modal.Content>
              </Modal>

              <Button onClick={handleDelete}>
                <Icon name='delete' /> Delete
              </Button>
            </Button.Group>
          </Item.Extra>
        </Item.Content>
        {props.menuItem.itemPhotos.map((image) => (
          <Item.Image key={image} src={image} size='tiny' />
        ))}
      </Item>
    </>
  );
};

export default connect(null, {
  updateMenuItem,
  removeMenuItem,
  fetchOperatorData
})(MenuItem);
