import {DEC_COUNTER_FOLLOW, INC_COUNTER_FOLLOW} from "../action-types";


const initialState = {

    follow: 0,
    itemFollow:true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER_FOLLOW: {
            console.log(action.payload);
            return { ...state, follow: state.follow+1,itemFollow: !state.itemFollow};
        }
        case DEC_COUNTER_FOLLOW:{
            return {...state,follow: state.follow-1,itemFollow: !state.itemFollow}
        }
        default: {
            return state;
        }
    }
};

export default reducer;
//todo add to item follow card
//todo add to double click decrement follow item
