import React from "react";
import logo from '../../image/trim.svg'
import SearchInput from "../../components/Input/SearchInput";
import UserAvatar from "../../components/User/UserAvatar";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from '../Home/Home';
import About from "../About/About";
import styles from './Header.module.css'

const Header=()=>{
  return(
      <Router>
      <div className={styles.header}>
          <Link to='/'>
          <div className={styles.logo}>
              <img className={styles.icon} src={logo} alt=""/>
                  <div className={styles.title}>
                      Pinball
                      <div className={styles.subtitle}>
                          The grid theme
                      </div>
                  </div>
          </div>
          </Link>
<SearchInput/>
<Link to='about'>
<UserAvatar/>
</Link>
      </div>
          <Switch>
              <Route path='/' exact={true}>
                  <Home/>
              </Route>
              <Route path='/about' exact={true}><About/></Route>
          </Switch>
      </Router>
  )
}
 export default Header