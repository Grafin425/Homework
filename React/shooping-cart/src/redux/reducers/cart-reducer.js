import {TOGGLE_ITEM_IN_CART,CLEAR_CART} from "../action-types";

const initialState = {
    cart:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_IN_CART: {
            const updatedCartlist = state.cart.filter(
                (el) => el.id !== action.payload.id
            );

            if (updatedCartlist.length === state.cart.length) {
                updatedCartlist.push(action.payload);
            }

            return { ...state, cart: updatedCartlist };
        }
        case CLEAR_CART:{
            console.log('clear');
            return {...state,cart: []}

        }
        default: {
            return state;
        }
    }
};

export default reducer;
