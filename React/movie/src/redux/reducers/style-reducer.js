import {TOGGLE_MODE_STYLE} from '../action-types'
const initialState={
    checked:false
}
const reducer=(state=initialState,action)=>{
    switch (action.type){
        case TOGGLE_MODE_STYLE:{
            return {...state,checked: action.payload}
        }

        default: {
            return state
        }
    }
}
export default reducer;
