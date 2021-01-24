import React from 'react';
import styles from './Input.module.css'


export const InputSelect = ({onSelectGenres}) => {
    return (
        <div className={styles.selectForm}>
        <label>Year:</label>
        <select name="select"  className={styles.select} placeholder='genre'  onChange={(e)=>onSelectGenres(e.target.value)}>
            <option value={28}>2020</option>
            <option value={18}>2019</option>
            <option value={14}>2018</option>
        </select>
        </div>
    )
}
