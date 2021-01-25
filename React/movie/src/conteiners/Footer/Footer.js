import React from "react";
import styles from './Footer.module.css'
import {socialMediaIcons} from '../../constants'
export const Footer=()=>{
  return(
      <footer>
      <div className={styles.footer}>
          <h1>Movie app</h1>
          <div className={styles.socialMediaWrapper}>
              {
                  socialMediaIcons.map((media,key)=><div className={styles.socialImageWrapper} key={key} ><img src={media.src} alt={media.alt}/></div>)
              }
          </div>
     <span>Developer by <a href="https://github.com/YaroslavYedyn">Yaroslav Yedyn&copy;</a></span>
      </div>
      </footer>
  )
}
