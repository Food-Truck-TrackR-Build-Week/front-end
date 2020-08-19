import {combineReducers} from "redux";

import {dinerReducer} from "./dinerReducer";
import {operatorReducer} from "./operatorReducer";

export const rootReducer = combineReducers({
  dinerReducer,
  operatorReducer,
});
