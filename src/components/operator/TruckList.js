import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {connect} from "react-redux";
import {fetchOperatorData} from "../../actions";
import {truckState} from "../../utils/initialTruckState";
import {Header, Segment, Icon, Button, Modal, Form} from "semantic-ui-react";

import AddTruckForm from "./AddTruckForm";

const TruckList = (props) => {
  const [open, setOpen] = useState(false);
  const [truck, setTruck] = useState({});
  const [truckToEdit, setTruckToEdit] = useState(truckState);

  const updateTruck = () => {
    axiosWithAuth()
      .put(`/api/trucks/${truckToEdit.id}`, truckToEdit)
      .then((res) => {
        console.log("SR: UpdateTruckForm.js: submit sucess: res: ", res.data);
        setTruckToEdit(res.data.id);
      })
      .catch((err) => {
        console.error(
          "SR: UpdateTruckForm.js: submit failed: err ",
          err.message
        );
      });
  };

  const handleDeleteTruck = (truck) => {
    axiosWithAuth()
      .delete(`/api/trucks/${truckToEdit.id}`, truck)
      .then((res) => {
        truck.filter((item) => item.id !== truckToEdit.id);
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    props.fetchOperatorData();
  }, []);

  const handleChange = (e) => {
    e.persist();
    setTruck({
      ...truck,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTruck();

    setOpen(false);
  };
  return (
    <>
      <Segment vertical textAlign="center">
        <AddTruckForm />
      </Segment>
      <h3>Food Trucks</h3>

      {props.trucks.map((truck) => (
        <Segment key={Date.now()} vertical>
          <Header size="large">{truck.name}</Header>
          <p>Cuisine: {truck.cuisineType}</p>

          <Button.Group basic>
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
                        value={truckToEdit.name}
                        onChange={handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Select Truck Image</label>
                      <input
                        type="file"
                        name="imageOfTruck"
                        value={truckToEdit.imageOfTruck}
                        onChange={handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Cuisine</label>
                      <input
                        type="text"
                        name="cuisineType"
                        placeholder="ex. Vietnamese"
                        value={truckToEdit.cuisineType}
                        onChange={handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Location</label>
                      <input
                        type="text"
                        name="currentLocation"
                        placeholder=""
                        value={truckToEdit.currentLocation}
                        onChange={handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Departure Time</label>
                      <input
                        type="time"
                        name="departureTime"
                        placeholder=""
                        value={truckToEdit.departureTime}
                        onChange={handleChange}
                      />
                    </Form.Field>
                    <Button type="submit">
                      <Icon name="add" /> Update Truck
                    </Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <Button onClick={handleDeleteTruck}>
              <Icon name="delete" /> Delete
            </Button>
          </Button.Group>
        </Segment>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    trucks: state.operator.truck,
  };
};

export default connect(mapStateToProps, {fetchOperatorData})(TruckList);
