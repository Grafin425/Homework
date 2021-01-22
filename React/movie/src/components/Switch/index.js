import React, {useContext, useState} from "react";
import Switch from "react-switch";
import {useDispatch, useSelector} from "react-redux";
import {toggleModeStyle} from "../../redux/action-creators";
import {ThemeContext} from "styled-components";
import { shade } from 'polished';
export const Switched = ({toggleTheme}) => {
    const dispatch=useDispatch()
    const {checked}=useSelector(({checked:{checked}})=>({
        checked
    }))
    const handleChange = nextChecked => {
        dispatch(toggleModeStyle(nextChecked))
    };
    const { colors, title } = useContext(ThemeContext);
    return (

        <div style={{display:"flex"}}>
            <span>
            {
                checked ?<div>DARK</div>:<div>LIGHT</div>
            }
            </span>
            <Switch
                // onChange={handleChange}
                // checked={checked}
                // onColor="#86d3ff"
                // onHandleColor="#2693e6"
                // handleDiameter={30}
                // uncheckedIcon={false}
                // checkedIcon={false}
                // boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                // height={20}
                // width={48}
                // className="react-switch"
                // id="material-switch">
                checked={title === 'dark'}
                onChange={toggleTheme}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors.secondary}
                offColor={shade(0.4, colors.primary)}
                >

            </Switch>
        </div>
    )
}
