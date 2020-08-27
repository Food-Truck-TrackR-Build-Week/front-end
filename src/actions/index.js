import {axiosWithAuth} from "../utils/axiosWithAuth";

export const FETCHING_TRUCKS_START = "FETCHING_TRUCKS_START";
export const FETCHING_TRUCKS_SUCCESS = "FETCHING_TRUCKS_SUCCESS";
export const FETCHING_TRUCKS_ERROR = "FETCHING_TRUCKS_ERROR";
export const ADD_TRUCK = "ADD_TRUCK";
export const UPDATE_TRUCK = "UPDATE_TRUCK";
export const REMOVE_TRUCK = "REMOVE_TRUCK";
export const ADD_MENUITEM = "ADD_TRUCK";
export const UPDATE_MENUITEM = "UPDATE_MENUITEM";
export const REMOVE_MENUITEM = "REMOVE_MENUITEM";

export const fetchOperatorData = () => (dispatch) => {
  dispatch({type: FETCHING_TRUCKS_START});

  axiosWithAuth()
    .get("/api/trucks")
    .then((res) => {
      console.log("SR: actions/index.js: fetchOperatorData: axios.then: ", res);
      dispatch({
        type: FETCHING_TRUCKS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({type: FETCHING_TRUCKS_ERROR, payload: err.message});
    });
};

export const addTruck = (addTruck) => (dispatch) => {
  axiosWithAuth()
    .post("/api/trucks", addTruck)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_TRUCK,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const updateTruck = (id, truckToEdit) => (dispatch) => {
  axiosWithAuth()
    .put(`/api/trucks/${id}`, truckToEdit)
    .then((res) => {
      console.log("SR: UpdateTruckForm.js: submit sucess: res: ", res.data);
      dispatch({
        type: UPDATE_TRUCK,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error("SR: UpdateTruckForm.js: submit failed: err ", err.message);
    });
};

// export const deleteTruck = () = (dispatch) => {

// }

// export const addMenuItem = () = (dispatch) => {

// }

// export const updateMenutItem = () = (dispatch) => {

// }

// export const deleteMenuItem = () = (dispatch) => {

// }
