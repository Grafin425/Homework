import React from "react";
import like from '../../image/like.svg'
import likeBlack from '../../image/like.black.svg'
export const FollowIcon=({onAddToWishList,movie,isAddedToWishlist})=>{
    console.log(isAddedToWishlist);
    return(
      <div>
          <a onClick={()=>onAddToWishList(movie)} >
              <img style={{width:25,height:25,marginBottom:20}} src={isAddedToWishlist?likeBlack:like} alt="like"/>
          </a>
      </div>
  )
}
