import React from "react";
import styles from './Input.module.css'


const SearchInput=()=>{
  return (
      <input className={styles.search} type="text" placeholder='search...' />
  )
}
export default SearchInput