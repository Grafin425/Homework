import React from "react";
import styles from './Auth.module.css'
import {LoginButton, LogoutButton, Profile} from "../../components";
import {useAuth0} from '@auth0/auth0-react'
export const Auth=()=>{
    const {isLoading,isAuthenticated}= useAuth0()
    if (isLoading) return <div>Loading...</div>

    return(
      <div className={styles.FlexWrapper}>
          {!isAuthenticated ?
              <div className={styles.AuthWrapper}>
                  <h2>You are not Authorized</h2>
                  <LoginButton/>
              </div>:
              <div className={styles.ProfileWrapper}>
              <Profile/>
              <LogoutButton/>
              </div>
          }
      </div>
  )
}
