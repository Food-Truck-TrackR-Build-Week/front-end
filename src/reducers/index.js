import {combineReducers} from "redux";

import {foodTruckReducer} from "./foodTruckReducer";

export const rootReducer = combineReducers({
  foodTruckReducer,
});
