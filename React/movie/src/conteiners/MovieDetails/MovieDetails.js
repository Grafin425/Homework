import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {moviesService} from "../../services";
import styles from './MovieDetails.module.css'
const MovieDetails = () => {
    const baseUrl = 'https://image.tmdb.org/t/p/w400/'
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {id} = useParams();
    const fetchMovie = async () => {
        try {
            setIsLoading(true)
            const data = await moviesService.getMovieById(id);
            setMovie(data)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchMovie()
    }, [])
    console.log(movie);

    if(isLoading && !movie || isLoading ===null){
        return <h1>loading....</h1>
    }
    const {poster_path,original_title,genres,release_date,vote_average,spoken_languages}=movie
    console.log(genres);
    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.lRight}> <h1>{original_title}</h1><p>Рік: <data value={release_date} >{release_date}</data></p><p>Рейтинг:{vote_average}</p><p>Жанри</p><p>Мови</p><p>Компанії</p></div>
                <div className={styles.lBottom}>
                    <button className={styles.button}> <span>ДИВИТИСЯ</span></button>
                    <button className={styles.button}><span>ТРЕЙЛЕР</span></button>
                </div>
            </div>
            <div className={styles.right}>
                <img src={`${baseUrl}${poster_path}`} alt={original_title}/>
            </div>
        </div>
    )
}
export default MovieDetails