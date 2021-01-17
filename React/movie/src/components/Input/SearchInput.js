import React from "react";
import styles from './Input.module.css'


export const SearchInput=({onSearchMovie})=>{
  return (
      <input onChange={(e)=>onSearchMovie(e.target.value)} className={styles.search} type="text" placeholder='search...' />
  )
}