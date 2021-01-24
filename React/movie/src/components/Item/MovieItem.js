import React from 'react'
import styles from './Item.module.css'
import {RatingItem} from "./RatingItem";


export const MovieItem = ({item,onFilmClick,isClicked}) => {
    const {original_title, backdrop_path,vote_average,poster_path} = item
    const baseUrl = 'https://image.tmdb.org/t/p/w400/'
    return (
        <div className={styles.card}  onClick={()=>isClicked?onFilmClick(item):console.log('eee')}>
            <div className={styles.image}>
                <img src={`${baseUrl}${poster_path}`} alt=""/>
            </div>
            <div className={styles.info}>
                <p className={styles.title}>{original_title}</p>
            </div>
            <div className={styles.functionality}>
                <RatingItem rate={vote_average}/>
            </div>


        </div>

    )
}
