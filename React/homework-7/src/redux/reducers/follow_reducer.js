import { INC_COUNTER_FOLLOW } from "../action-types";

const initialState = {
    follow: 0,
    itemFollow:false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC_COUNTER_FOLLOW: {
            return { ...state, follow: state.follow+1,itemFollow: !state.itemFollow };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
