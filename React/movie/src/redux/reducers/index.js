import {combineReducers} from "redux";

import movies from './movies-reducer'
import wishlist from './wishlist-reducer'
import checked from './style-reducer'

export const reducer=combineReducers({
    movies,
    wishlist,
    checked,
})
