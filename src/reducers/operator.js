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

  truck: [
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
          name: "Soda",
          price: 0.50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ratings: 4,
          image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: "Soup",
          price: 0.50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ratings: 4,
          image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: "Beef",
          price: 0.50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ratings: 4,
          image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: "Cookies",
          price: 0.50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ratings: 4,
          image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
        },
      ],

      currentLocation: {
        lat: 25.601299399999998,
        lng: -80.40306919999999,
        location: "Soho, NYC",
        departureTime: {
          date: "08/20/20",
          time: "12:48AM",
        },
      },
    },
    {
      truckName: "The Big Daddy",
      imageOfTruck:
        "https://images.unsplash.com/photo-1576595879571-5402d294c407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80",
      cuisineType: "Latin Cuisine",
      customerRatings: [3, 4, 2, 4],
      customerRatingAvg: 4,
      menu: [
        {
          name: "Soda",
          price: 0.50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ratings: 4,
          image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: "Soup",
          price: 0.50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ratings: 4,
          image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: "Beef",
          price: 0.50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ratings: 4,
          image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
        },
        {
          name: "Cookies",
          price: 0.50,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ratings: 4,
          image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
        },
      ],

      currentLocation: {
        lat: 25.601699399999998,
        lng: -80.41486919999999,
        location: "Soho, NYC",
        departureTime: {
          date: "08/20/20",
          time: "12:48AM",
        },
      },
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
