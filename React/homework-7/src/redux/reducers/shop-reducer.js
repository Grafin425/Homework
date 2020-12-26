import {INC_COUNTER_SHOP} from "../action-types"


const initialState = {

    counter: 0,
    shopIcon:false,


};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER_SHOP: {
            return { ...state, counter: state.counter + 1,shopIcon: !state.shopIcon};
        }
        default: {
            return state;
        }
    }
};

export default reducer;
