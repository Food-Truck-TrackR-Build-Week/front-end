import {axiosWithAuth} from "../utils/axiosWithAuth";

export const FETCHING_TRUCKS_START = "FETCHING_TRUCKS_START";
export const FETCHING_TRUCKS_SUCCESS = "FETCHING_TRUCKS_SUCCESS";
export const FETCHING_TRUCKS_ERROR = "FETCHING_TRUCKS_ERROR";
export const ADD_TRUCK_START = "ADD_TRUCK_START";
export const ADD_TRUCK_SUCCESS = "ADD_TRUCK_SUCCESS";
export const ADD_TRUCK_ERROR = "ADD_TRUCK_ERROR";

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

export const addFoodTruck = (truck) => (dispatch) => {
  dispatch({type: ADD_TRUCK_START});

  axiosWithAuth()
    .post("/api/trucks", truck)
    .then((res) => {
      dispatch({
        type: ADD_TRUCK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({type: ADD_TRUCK_ERROR, payload: err.message});
    });
};
