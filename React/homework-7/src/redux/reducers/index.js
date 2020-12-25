import { combineReducers } from "redux";

import counterReducer from "./shop-reducer";
import followReducer from "./follow_reducer";


export const reducer = combineReducers({
    counter: counterReducer,
    follow:followReducer
});
