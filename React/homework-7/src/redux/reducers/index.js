import { combineReducers } from "redux";

import cart from "./shop-reducer";
import wishlist from "./follow-reducer";
import products from "./products-reducer";


export const reducer = combineReducers({
    cart,
    wishlist,
    products

});
