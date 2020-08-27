import {
  SETTING_DINER_INFO,
  FETCHING_TRUCKS_START,
  FETCHING_TRUCKS_SUCCESS,
  FETCHING_TRUCKS_ERROR
} from "../actions";


const initialState = {
  isFetching: false,
  error: '',
  userInfo:{
    dinerId: 10001,
    username: "jorge",
    email: "angel.asd@hasd.com",
    currentLocation: "FL",
    favoriteTrucks: [],
  },
  trucks: [
    
  ]
};

export const diner = (state = initialState, action) => {
  switch (action.type) {
    case SETTING_DINER_INFO: 
      return {
        ...state,
        ...state.userInfo = {...action.payload}
      }
    case FETCHING_TRUCKS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_TRUCKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        trucks: action.payload,
        error: "",
      };
    case FETCHING_TRUCKS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
