import {useSelector} from "react-redux";
import {MovieItem} from "../../components/Item";
import React from "react";

export const Like=()=>{
    const {wishlist} = useSelector(({wishlist: {wishlist}}) => ({
        wishlist
    }))
    return(
      <div>
          {
              wishlist&&wishlist.map(movie => <MovieItem item={movie} key={movie.id} isClicked={false} />)
          }
      </div>
  )
}
