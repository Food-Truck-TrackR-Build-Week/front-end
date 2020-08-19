const initialState = {
  diner: {
    username: "",
    email: "",
    password: "",
    currentLocation: "",
    favoriteTrucks: [],
  },
  operator: {
    username: "",
    email: "",
    password: "",
    trucksOwned: [],

    truck: {
      imageOfTruck: "",
      cuisineType: "",
      customerRatings: [],
      customerRatingAvg: "",

      menu: {
        itemName: "",
        itemDescription: "",
        itemPhotos: [],
        itemPrice: "",
        customerRatings: [],
        customerRatingAvg: "",
      },

      currentLocation: {
        location: "",
        departureTime: {
          date: "",
          time: "",
        },
      },
    },
  },
};

export const foodTruckReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
