const initialState = {
  diner: {
    username: "",
    email: "",
    password: "",
    currentLocation: "",
    favoriteTrucks: [],
  },
};

export const dinerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
