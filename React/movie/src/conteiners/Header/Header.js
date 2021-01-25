import React from "react";
import logo from '../../image/trim.svg'
import {Link, Route, Switch} from "react-router-dom";
import {Auth, Home, Like, MovieDetails} from '../../conteiners';
import {links} from '../../constants'
import styles from './Header.module.css'
import {Switched} from "../../components";

export const Header=({toggleTheme})=>{

    return(
      <header>
      <div className={styles.header}>
          <title className={styles.logo}>
              <img className={styles.icon} src={logo} alt=""/>
                  <span className={styles.title}>
                      Pinball
                      <div className={styles.subtitle}>
                          The grid theme
                      </div>
                  </span>
          </title>
          {
              links.map((item,key)=>{
                  return (
                      <div key={key} className={styles.navItem}>
                          <Link to={item.link}>
                              <div className={styles.navLink}>{item.name}</div>
                          </Link>
                      </div>
                  )
              })
          }
          <Switched toggleTheme={toggleTheme}  />
      </div>
          <main>
          <Switch>
              <Route path='/' exact={true}>
                  <Home/>
              </Route>
              <Route path='/like' exact>
                  <Like/>
              </Route>
              <Route path='/login' exact>
                  <Auth/>
              </Route>
              <Route path='/movie/:id'>
                  <MovieDetails/>
              </Route>
          </Switch>
          </main>
      </header>
  )
}
