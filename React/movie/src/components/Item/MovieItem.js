import React from 'react'
import styles from './Item.module.css'
import RatingItem from "./RatingItem";



const MovieItem = ({item}) => {
    console.log(item);
    const {original_title, overview, backdrop_path,vote_average} = item
    const baseUrl = 'https://image.tmdb.org/t/p/w400/'
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={`${baseUrl}${backdrop_path}`} alt=""/>
            </div>
            <div className={styles.info}>
                <p className={styles.title}>{original_title}</p>
                <p className={styles.subTitle}>{overview}</p>
            </div>
            <div className={styles.functionality}>
                <RatingItem rate={vote_average}/>
            </div>


        </div>
    )
}
export default MovieItem