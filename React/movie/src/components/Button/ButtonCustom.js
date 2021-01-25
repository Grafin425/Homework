import React from "react";
import styles from './style.module.css'

export const ButtonCustom=({nameOne,nameSecond,functionClick,href,onAddToWishList,movie,isAddedToWishlist})=>{
  return(
      <button onClick={()=>onAddToWishList(movie)} className={styles.button}>
          <span>{isAddedToWishlist?<>{nameSecond}</>:<>{nameOne}</>}</span>
      </button>
  )
}
