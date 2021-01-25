import {useSelector} from "react-redux";
import {MovieItem} from "../../components/Item";
import React from "react";

import styles from './Like.module.css'

export const Like=()=>{
    const {wishlist} = useSelector(({wishlist: {wishlist}}) => ({
        wishlist
    }))
    if(wishlist.length<=0) return <h2 className={styles.LikeWrapperEmpty}>Your wishlist is empty</h2>
    return(
      <div className={styles.LikeWrapper}>
          {
              wishlist&&wishlist.map(movie => <MovieItem item={movie} key={movie.id} isClicked={false} />)
          }
      </div>
  )
}
