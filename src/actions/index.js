import {axiosWithAuth} from "../utils/axiosWithAuth";

export const FETCHING_OPERATORS_START = "FETCHING_OPERATORS_START";
export const FETCHING_OPERATORS_SUCCESS = "FETCHING_OPERATORS_SUCCESS";
export const FETCHING_OPERATORS_ERROR = "FETCHING_OPERATORS_ERROR";
export const SET_OPERATOR_INFO = "SET_OPERATOR_INFO";
export const FETCHING_TRUCKS_START = "FETCHING_TRUCKS_START";
export const FETCHING_TRUCKS_SUCCESS = "FETCHING_TRUCKS_SUCCESS";
export const FETCHING_TRUCKS_ERROR = "FETCHING_TRUCKS_ERROR";
export const ADD_TRUCK = "ADD_TRUCK";
export const UPDATE_TRUCK = "UPDATE_TRUCK";
export const REMOVE_TRUCK = "REMOVE_TRUCK";
export const ADD_MENUITEM = "ADD_TRUCK";
export const UPDATE_MENUITEM = "UPDATE_MENUITEM";
export const REMOVE_MENUITEM = "REMOVE_MENUITEM";

export const fetchOperatorData = (id) => (dispatch) => {
  dispatch({type: FETCHING_OPERATORS_START});

  axiosWithAuth()
    .get(`/api/operators/${id}`)
    .then((res) => {
      console.log(
        "SR: actions/index.js: fetchOperatorData: axios.then: ",
        res.data
      );
      dispatch({
        type: FETCHING_OPERATORS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({type: FETCHING_OPERATORS_ERROR, payload: err.message});
    });
};

export const setOperatorInfo = (info) => (dispatch) => {
  dispatch({type: SET_OPERATOR_INFO, payload: info});
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

export const removeTruck = (id, truckToEdit) => (dispatch) => {
  axiosWithAuth()
    .delete(`/api/trucks/${id}`, truckToEdit)
    .then((res) => {
      dispatch({
        type: REMOVE_TRUCK,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err.message));
};

export const addMenuItem = (id, menuItem) => (dispatch) => {
  axiosWithAuth()
    .post(`/api/trucks/${id}/menu`, menuItem)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_MENUITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const updateMenuItem = (id, menuItemId, itemToEdit) => (dispatch) => {
  axiosWithAuth()
    .put(`/api/trucks/${id}/menu/${menuItemId}`, itemToEdit)
    .then((res) => {
      console.log("SR: UpdateMenuItem: res", res.data);
      dispatch({
        type: UPDATE_MENUITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const deleteMenuItem = (id, menuItemId, itemToEdit) => (dispatch) => {
  axiosWithAuth()
    .delete(`/api/trucks/${id}/menu/${menuItemId}`, itemToEdit)
    .then((res) => {
      dispatch({
        type: REMOVE_MENUITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err.message));
};

// ---------------------------------------------------------------------------

export const SETTING_DINER_INFO = "SETTING_DINER_INFO";

export const settingDinerInfo = (info) => (dispatch) => {
  dispatch({type: SETTING_DINER_INFO, payload: info});
};

export const fetchTruckData = () => (dispatch) => {
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
