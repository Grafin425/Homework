import { TOGGLE_ITEM_IN_CART,CLEAR_CART} from "../action-types";

export const toggleItemInCart = (product) => ({
    type: TOGGLE_ITEM_IN_CART,
    payload: product
});
export const clearCart=()=>({
    type:CLEAR_CART
})