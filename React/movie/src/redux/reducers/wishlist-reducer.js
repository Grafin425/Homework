import {TOGGLE_ITEM_IN_WISHLIST} from "../action-types";

const initialState = {
    wishlist: [],

}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_ITEM_IN_WISHLIST:{
            const updateWishList=state.wishlist.filter(
                (el)=>el.id !==action.payload.id

            );
            localStorage.removeItem(action.payload.id)
            localStorage.setItem('wishlist', JSON.stringify(updateWishList.length>0?updateWishList:[]));



            if (updateWishList.length===state.wishlist.length){
                updateWishList.push(action.payload);
                localStorage.setItem('wishlist', JSON.stringify(updateWishList.length>0?updateWishList:[]));
            }
            return {...state,wishlist: updateWishList}
        }
        default : {
            return state
        }
    }

}
export default reducer;
