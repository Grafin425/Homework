import {SET_MOVIES,SET_MOVIES_SEARCH} from "../action-types";

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
        case SET_MOVIES_SEARCH: {
            console.log('search...')
            return {...state,movies:action.payload}
        }
        default: {
            return state
        }
    }
}
export default reducer;