import React from 'react';
import user from '../../image/user.svg'
import styles from './User.module.css'
export const UserAvatar=()=>{
  return(
      <div style={{display:'flex'}}>
      <div className={styles.avatar}>
          <img  src={user} alt=""/>

      </div>
    <div className={styles.userName}>User Name</div>
      </div>
  )
}