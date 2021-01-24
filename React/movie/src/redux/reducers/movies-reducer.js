import {SET_MOVIES, SET_MOVIES_SEARCH} from "../action-types";

const initialState={
    movies:[]
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case SET_MOVIES: {
            return {...state,movies: action.payload};
        }
        case SET_MOVIES_SEARCH: {
            return {...state,movies:action.payload}
        }
        default: {
            return state
        }
    }
}
export default reducer;
