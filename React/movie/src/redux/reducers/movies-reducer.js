import {SET_MOVIES} from "../action-types";

const initialState={
    movies:[]
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case SET_MOVIES: {
            console.log('payload');
            console.log(action.payload);
            return {...state,movies: action.payload};
        }
        default: {
            return state
        }
    }
}
export default reducer;