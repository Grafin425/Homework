import {INC_COUNTER_SHOP,INC_COUNTER_FOLLOW} from "../action-types"

const initialState = {
    counter: 0,

};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER_SHOP: {
            return { ...state, counter: state.counter + 1};
        }
        default: {
            return state;
        }
    }
};

export default reducer;