import {TOGGLE_ITEM_IN_WISHLIST} from "../action-types";


const initialState = {

    wishlist:[]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_IN_WISHLIST: {
            console.log(action);
            const updatedWishlist = state.wishlist.filter(
                (el) => el.id !== action.payload.id
            );

            if (updatedWishlist.length === state.wishlist.length) {
                updatedWishlist.push(action.payload);
            }

            return { ...state, wishlist: updatedWishlist };
        }
        default: {
            return state;
        }
    }
};

export default reducer;