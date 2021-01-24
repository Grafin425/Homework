import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import styles from './User.module.css'

export const  Profile=()=>{
    const {user,isAuthenticated}=useAuth0()
  return(
      isAuthenticated && (
      <div className={styles.auth}>
          <div className={styles.photo}>
          <img  src={user.picture} alt={user.name}/>
          </div>
          <span className={styles.userInf}>
          <h2>{user.name}</h2>
              <h4>{user.email}</h4>
              </span>

      </div>
      )
  )
}
