import React, {useState} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
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
  const [truckToEdit, setTruckToEdit] = useState(props.truck);

  const updateTruck = () => {
    axiosWithAuth()
      .put(`/api/trucks/${truckToEdit.id}`, {
        operatorId: 100001,
        name: truckToEdit.name,
        imageOfTruck: truckToEdit.imageOfTruck,
        cuisineType: truckToEdit.cuisineType,
        currentLocation: truckToEdit.currentLocation,
      })
      .then((res) => {
        console.log("SR: UpdateTruckForm.js: submit sucess: res: ", res.data);
        setTruckToEdit(truckToEdit);
      })
      .catch((err) => {
        console.error(
          "SR: UpdateTruckForm.js: submit failed: err ",
          err.message
        );
      });
  };

  const handleDeleteTruck = (truckToEdit) => {
    axiosWithAuth()
      .delete(`/api/trucks/${props.truck.id}`, truckToEdit)
      .then((res) => {})
      .catch((err) => console.error(err.message));
  };

  const handleChange = (e) => {
    e.persist();
    setTruckToEdit({
      ...truckToEdit,
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
                Departure Time: {props.truck.departureTime}
              </span>
            </Card.Meta>
            <Card.Description>
              <Icon name="food" />
              Cuisine: {props.truck.cuisineType}
            </Card.Description>
            <Card.Description>
              <Icon name="map pin" />
              Location: {props.truck.currentLocation}
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

export default TruckCard;
