import { TOGGLE_ITEM_IN_CART} from "../action-types";

export const toggleItemInCart = (product) => ({
    type: TOGGLE_ITEM_IN_CART,
    payload: product
});