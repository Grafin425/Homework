import {useSelector} from "react-redux";
import MovieItem from "../../components/Item/MovieItem";
import styles from './Home.module.css'
import {useHistory} from "react-router-dom";


const Home = () => {
    const history = useHistory()
    const {movies} = useSelector(({movies: {movies}}) => ({
        movies
    }))
    const {results} = movies

    const onFilmClick = (film) => {
        history.push(`/movie/${film.id}`)
    }


    return (
        <div className={styles.listWrapper}>
            {
                results && results.map(movie => <MovieItem item={movie} key={movie.id} onFilmClick={onFilmClick}/>)

            }
        </div>
    )
}
export default Home