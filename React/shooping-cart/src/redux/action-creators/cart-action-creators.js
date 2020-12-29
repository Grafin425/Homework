import { TOGGLE_ITEM_IN_CART,CLEAR_CART,REMOVE_ITEM,ADD_ITEM_QTY,DECREASE} from "../action-types";

export const toggleItemInCart = (product) => ({
    type: TOGGLE_ITEM_IN_CART,
    payload: product
});
export const clearCart=()=>({
    type:CLEAR_CART
})
export const removeItem=(payload)=>({
    type:REMOVE_ITEM,
    payload
})
export const addItemQty=(payload)=>({
    type: ADD_ITEM_QTY,
    payload
})
export const decrease =(payload)=>({
    type:DECREASE,
    payload
})