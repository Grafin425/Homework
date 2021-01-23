import React, {useContext} from "react";
import Switch from "react-switch";
import {ThemeContext} from "styled-components";
import styles from './index.module.css'
import {shade} from 'polished';

export const Switched = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);
    return (

        <div style={{display:"flex"}}>
            <span className={styles.switchText}>
            {
                title === 'dark'? <div>DARK</div>:<div>LIGHT</div>
            }
            </span>
            <Switch
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
