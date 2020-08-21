import React, {useState} from "react";
import {Button, Modal, Icon, Form} from "semantic-ui-react";

const AddTruckForm = () => {
  const [open, setOpen] = useState(false);
  const [truck, setTruck] = useState({
    truckName: "",
    imageOfTruck: "",
    cuisineType: "",
  });

  const handleChange = (e) => {
    setTruck({
      ...truck,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Have create action that will post to truck in reducers

    setTruck({
      truckName: "",
      imageOfTruck: "",
      cuisineType: "",
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
            Add Food Truck
          </Button>
        }
      >
        <Modal.Header>Add Food Truck</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Truck Name</label>
                <input
                  type="text"
                  name="truckName"
                  placeholder="ex. Vietnamese"
                  value={truck.truckName}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Select Truck Image</label>
                <input
                  type="file"
                  name="imageOfTruck"
                  value={truck.imageOfTruck}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Cuisine</label>
                <input
                  type="text"
                  name="cuisineType"
                  placeholder="ex. Vietnamese"
                  value={truck.cuisineType}
                  onChange={handleChange}
                />
              </Form.Field>
              <Button type="submit">
                <Icon name="add" /> Add Truck
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default AddTruckForm;
