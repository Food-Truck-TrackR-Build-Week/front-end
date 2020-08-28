import {
  FETCHING_OPERATORS_START,
  FETCHING_OPERATORS_SUCCESS,
  FETCHING_OPERATORS_ERROR,
  // SET_OPERATOR_INFO,
  ADD_TRUCK,
  UPDATE_TRUCK,
  REMOVE_TRUCK,
  ADD_MENUITEM,
  // UPDATE_MENUITEM,
  REMOVE_MENUITEM,
} from "../actions";

const initialState = {
  isFetching: false,
  isOnline: false,
  error: "",
  operatorInfo: {
    operatorId: localStorage.getItem("operatorId"),
    username: "",
    email: "",
    trucksOwned: [{customerRatings: [2, 3, 4]}],
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

    // case SET_OPERATOR_INFO:
    //   return {
    //     ...state,
    //     operatorInfo: action.payload,
    //   };

    case ADD_TRUCK:
      return {
        ...state,
        trucksOwned: [...state.operatorInfo.trucksOwned, action.payload],
      };

    case UPDATE_TRUCK:
      return {
        ...state,
        operatorInfo: {
          ...state.operatorInfo,
          trucksOwned: action.payload,
        },
        // trucksOwned: state.operatorInfo.trucksOwned.map((truck, i) => i === 1 ? {
        //   {...truck, truck: action.payload} : truck-
        // }),
      };

    case REMOVE_TRUCK:
      return {
        ...state,
        trucksOwned: [
          ...state.operator.trucksOwned.filter(
            (truck) => truck !== action.payload
          ),
        ],
      };

    case ADD_MENUITEM:
      return {
        ...state,
        trucksOwned: [
          {
            ...state,
            menu: [...state.operatorInfo.trucksOwned.menu, action.payload],
          },
        ],
      };

    case REMOVE_MENUITEM:
      return {
        ...state,
        trucksOwned: [
          {
            ...state,
            menu: [
              ...state.operatorInfo.trucksOwned.id.menu.filter(
                (item) => item !== action.payload
              ),
            ],
          },
        ],
      };

    default:
      return state;
  }
};
