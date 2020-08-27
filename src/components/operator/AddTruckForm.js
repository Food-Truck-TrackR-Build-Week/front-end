import React, {useState} from "react";
import {connect} from "react-redux";
import {addTruck} from "../../actions";
// import LocationFinder from "./LocationFinder";
import {Button, Modal, Icon, Form} from "semantic-ui-react";

const AddTruckForm = (props) => {
  const [open, setOpen] = useState(false);
  const [addTruck, setAddTruck] = useState({
    operatorId: props.operatorId,
    name: "",
    imageOfTruck: "",
    cuisineType: "",
    currentLocation: "",
  });

  const handleChange = (e) => {
    setAddTruck({
      ...addTruck,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTruck(addTruck);

    setAddTruck({
      name: "",
      imageOfTruck: "",
      cuisineType: "",
      currentLocation: "",
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
          <Button
            color="orange"
            style={{marginTop: ".5rem", marginBottom: ".75rem"}}
          >
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
                  placeholder="Name of Truck"
                  value={addTruck.name}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Image URL</label>
                <input
                  type="text"
                  name="imageOfTruck"
                  placeholder="Enter Image URL"
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
                  placeholder="Truck's Location"
                  value={addTruck.currentLocation}
                  onChange={handleChange}
                />
                {/* <LocationFinder
                  name="currentLocation"
                  value={addTruck.currentLocation}
                  onChange={handleChange}
                /> */}
              </Form.Field>
              {/* <Form.Field>
                <label>Departure Time</label>
                <input
                  type="time"
                  name="departureTime"
                  placeholder=""
                  value={addTruck.departureTime}
                  onChange={handleChange}
                />
              </Form.Field> */}
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

export default connect(null, {addTruck})(AddTruckForm);
