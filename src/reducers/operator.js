import {
  FETCHING_OPERATORS_START,
  FETCHING_OPERATORS_SUCCESS,
  FETCHING_OPERATORS_ERROR,
  SET_OPERATOR_INFO,
  ADD_TRUCK,
  UPDATE_TRUCK,
  REMOVE_TRUCK,
  ADD_MENUITEM,
  UPDATE_MENUITEM,
  REMOVE_MENUITEM,
} from "../actions";

const initialState = {
  isFetching: false,
  error: "",
  operatorInfo: {
    operatorId: "",
    username: "",
    email: "",
    trucksOwned: [],
  },
};

export const operator = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_OPERATORS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_OPERATORS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        operatorInfo: action.payload,
        error: "",
      };
    case FETCHING_OPERATORS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case SET_OPERATOR_INFO:
      return {
        ...state,
        operatorInfo: action.payload,
      };

    case ADD_TRUCK:
      return {
        ...state,
        trucksOwned: [...state.trucksOwned, action.payload],
      };

    case UPDATE_TRUCK:
      return {
        ...state,
        trucksOwned: [action.payload],
      };

    case REMOVE_TRUCK:
      return {
        ...state,
        trucksOwned: [action.payload],
      };

    case ADD_MENUITEM:
      return {
        ...state,
        trucksOwned: [
          {
            ...state,
            menu: [...state.trucksOwned.menu, action.menuItem],
          },
        ],
      };

    case UPDATE_MENUITEM:
      return {
        ...state,
        menu: [action.payload],
      };

    case REMOVE_MENUITEM:
      return {
        ...state,
        menu: [action.payload],
      };

    default:
      return state;
  }
};
