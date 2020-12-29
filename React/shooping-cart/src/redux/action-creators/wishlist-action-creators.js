import {TOGGLE_ITEM_IN_WISHLIST} from "../action-types";

export const toggleItemInWishList = (product) => ({
    type: TOGGLE_ITEM_IN_WISHLIST,
    payload: product
});

