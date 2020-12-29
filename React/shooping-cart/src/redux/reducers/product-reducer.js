import { SET_PRODUCTS } from "../action-types";

const initialState = {
    products: []
};

const reducer=(state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            console.log(action);
            return { ...state, products: action.payload };
        }
        default: {
            return state;
        }
    }
}
export default reducer;