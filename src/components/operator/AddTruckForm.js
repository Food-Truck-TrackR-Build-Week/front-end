import React, {useState} from "react";

import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {truckState} from "../../utils/initialTruckState";
import {Button, Modal, Icon, Form} from "semantic-ui-react";

const AddTruckForm = () => {
  const [open, setOpen] = useState(false);
  const [addTruck, setAddTruck] = useState(truckState);
  // const [operator, setOperator] = usetState();

  const handleChange = (e) => {
    setAddTruck({
      ...addTruck,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/trucks", {
        operatorId: 100001,
        name: addTruck.name,
        imageOfTruck: addTruck.imageOfTruck,
        cuisineType: addTruck.cuisineType,
        currentLocation: addTruck.currentLocation,
      })
      .then((res) => {
        console.log(res.data);
        setAddTruck(addTruck);
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
                  name="name"
                  placeholder="ex. Vietnamese"
                  value={addTruck.name}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Select Truck Image</label>
                <input
                  type="text"
                  name="imageOfTruck"
                  value={addTruck.imageOfTruck}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Cuisine</label>
                <input
                  type="text"
                  name="cuisineType"
                  placeholder="ex. Vietnamese"
                  value={addTruck.cuisineType}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Location</label>
                <input
                  type="text"
                  name="currentLocation"
                  placeholder=""
                  value={addTruck.currentLocation}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Departure Time</label>
                <input
                  type="time"
                  name="departureTime"
                  placeholder=""
                  value={addTruck.departureTime}
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
