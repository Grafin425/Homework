import {combineReducers} from "redux";

import cart from "./cart-reducer";
import wishlist from "./wishlist-reducer";
import products from "./product-reducer";


export const reducer = combineReducers({
    cart,
    wishlist,
    products
});
