import { combineReducers } from "redux";

import counterReducer from "./shop-reducer";
import followReducer from "./follow-reducer";


export const reducer = combineReducers({
    counter: counterReducer,
    follow:followReducer,
    itemFollow:followReducer,
    shopIcon:counterReducer
});
