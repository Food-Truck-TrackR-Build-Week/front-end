import React, {useState} from "react";
import {connect} from "react-redux";
import {updateTruck, removeTruck} from "../../actions";
import {
  Card,
  Icon,
  Image,
  Header,
  Rating,
  Button,
  Modal,
  Form,
} from "semantic-ui-react";

const TruckCard = (props) => {
  const [open, setOpen] = useState(false);
  const [truckToEdit, setTruckToEdit] = useState({
    operatorId: props.operatorId,
    name: props.truck.name,
    imageOfTruck: props.truck.imageOfTruck,
    cuisineType: props.truck.cuisineType,
    currentLocation: props.truck.currentLocation,
  });

  const handleDeleteTruck = () => {
    props.removeTruck(props.truck.id, truckToEdit);
    window.location.reload();
  };

  const handleChange = (e) => {
    setTruckToEdit({
      ...truckToEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.updateTruck(props.truck.id, truckToEdit);
    console.log("SR : updateTruck", props.updateTruck(truckToEdit.id));

    setOpen(false);
  };

  return (
    <>
      <div>
        <Header size="large">
          {props.truck.name}
          <Button.Group basic size="tiny">
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
                        placeholder="Name of Truck"
                        value={truckToEdit.name}
                        onChange={handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Image URL</label>
                      <input
                        type="text"
                        name="imageOfTruck"
                        placeholder="Enter Image URL"
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
                        placeholder="Truck's Location"
                        value={truckToEdit.currentLocation}
                        onChange={handleChange}
                      />
                    </Form.Field>
                    {/* <Form.Field>
                      <label>Departure Time</label>
                      <input
                        type="time"
                        name="departureTime"
                        placeholder=""
                        value={truckToEdit.departureTime}
                        onChange={handleChange}
                      />
                    </Form.Field> */}
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
        </Header>

        <Card>
          <Image
            src={props.truck.imageOfTruck}
            alt={`${props.truck.cuisineType} food truck`}
            size="medium"
          />
          <Card.Content>
            <Card.Header></Card.Header>

            <Card.Meta>
              <span className="date">
                <Icon name="clock" />
                {props.truck.departureTime}
              </span>
            </Card.Meta>
            <Card.Description>
              <Icon name="food" />
              {props.truck.cuisineType}
            </Card.Description>
            <Card.Description>
              <Icon name="map pin" />
              {props.truck.currentLocation}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            Average Rating:
            <br />
            <Rating
              maxRating={5}
              defaultRating={props.truck.customerRatingAvg}
              icon="star"
              disabled
              size="large"
              style={{marginTop: ".75rem"}}
            />
          </Card.Content>
        </Card>
      </div>
    </>
  );
};

export default connect(null, {updateTruck, removeTruck})(TruckCard);
