import {Hed, Logo, SubTitle, Title} from './Header.style'
import React from "react";
import logo from '../../image/trim.svg'

const Header=()=>{
  return(
      <Hed>
          <Logo>
              <img style={{ width:'55px',
                  height:'55px',}} src={logo} alt=""/>
                  <Title>
                      Pinball
                      <SubTitle>
                          The grid theme
                      </SubTitle>
                  </Title>
          </Logo>
      </Hed>
  )
}
 export default Header