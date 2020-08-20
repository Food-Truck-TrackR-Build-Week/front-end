import {
  FETCHING_TRUCKS_START,
  FETCHING_TRUCKS_SUCCESS,
  FETCHING_TRUCKS_ERROR,
} from "../actions";

const initialState = {
  isFetching: false,
  error: "",
  username: "",
  email: "",
  password: "",
  trucksOwned: [],

  truck: {
    imageOfTruck:
      "https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=945&q=80",
    cuisineType: "Vietnamese",
    customerRatings: [4, 4, 4],
    customerRatingAvg: 4,

    menu: {
      itemName: "",
      itemDescription: "",
      itemPhotos: [],
      itemPrice: "",
      customerRatings: [],
      customerRatingAvg: "",
    },

    currentLocation: {
      location: "Soho, NYC",
      departureTime: {
        date: "08/20/20",
        time: "12:48AM",
      },
    },
  },
};

export const operator = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TRUCKS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_TRUCKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        truck: action.payload,
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
