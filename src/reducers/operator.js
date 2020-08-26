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

  trucksOwned: [
    {
      id: Date.now(),
      operatorId: Date.now(),
      name: "Kitchenette Karts",
      imageOfTruck:
        "https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=945&q=80",
      cuisineType: "Vietnamese",

      customerRatings: [3, 4, 2, 4],
      customerRatingAvg: 4,
      menu: [
        {
          id: Date.now(),
          menuId: Date.now(),
          itemName: "Soda",
          itemPrice: 1.5,
          itemDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          customerRatings: 3,
          customerRatingAvg: 4,
          itemPhotos: [
            "https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
          ],
        },
      ],

      currentLocation: "",
      departureTime: "",
    },
    {
      id: Date.now() + 1,
      operatorId: Date.now() + 1,
      name: "The Big Daddy",
      imageOfTruck:
        "https://images.unsplash.com/photo-1576595879571-5402d294c407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80",
      cuisineType: "Latin Cuisine",
      customerRatings: [3, 4, 2, 4],
      customerRatingAvg: 5,
      menu: [],

      currentLocation: "",
      departureTime: "",
    },
  ],
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
        trucksOwned: action.payload,
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
