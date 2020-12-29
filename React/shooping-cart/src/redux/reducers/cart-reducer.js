import {TOGGLE_ITEM_IN_CART,CLEAR_CART,REMOVE_ITEM,ADD_ITEM_QTY,DECREASE} from "../action-types";

export const sumCart=cart=>{
    let itemCount=cart.reduce((total,cart)=>total+cart.quantity,0)
    let total = cart.reduce((total, cart) => total + cart.price * cart.quantity, 0).toFixed(2);
    return { itemCount, total }
}
const initialState = {
    cart:[],
    sumCart:{}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_IN_CART: {
            const updatedCartlist = state.cart.filter(
                (el) => el.id !== action.payload.id,
            );

            if (updatedCartlist.length === state.cart.length) {
                updatedCartlist.push({...action.payload,quantity: 1});
            }

            return { ...state,...sumCart(state.cart), cart: updatedCartlist };
        }
        case CLEAR_CART:{
            console.log('clear');
            return {...state,cart: []}

        }
        case REMOVE_ITEM:{
            return {
                ...state,
                ...sumCart(state.cart.filter(item => item.id !== action.payload.id)),
                cart: [...state.cart.filter(item=>item.id!==action.payload.id)]
            }
        }
        case ADD_ITEM_QTY:{
            state.cart[state.cart.findIndex(item => item.id === action.payload.id)].quantity++
            return {
                ...state,
                ...sumCart(state.cart),
                cart: [...state.cart]
            }
        }
        case DECREASE:
            state.cart[state.cart.findIndex(item => item.id === action.payload.id)].quantity--
            return {
                ...state,
                ...sumCart(state.cart),
                cart: [...state.cart]
            }
        default: {
            return state;
        }
    }
};

export default reducer;
