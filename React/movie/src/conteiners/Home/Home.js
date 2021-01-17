import {useDispatch, useSelector} from "react-redux";
import MovieItem from "../../components/Item/MovieItem";
import styles from './Home.module.css'
import {useHistory} from "react-router-dom";
import {PaginationWrapper} from "../../components/PaginationWrapper";
import {setMovies} from "../../redux/action-creators";


const Home = () => {
    const history = useHistory()
    const {movies} = useSelector(({movies: {movies}}) => ({
        movies
    }))
    const {results,page,total_pages,total_results} = movies

    const onFilmClick = (film) => {
        history.push(`/movie/${film.id}`)
    }
    const dispatch = useDispatch();

    const handlePageChange=(page)=>{
        dispatch(setMovies({page}))
    }

    return (
        <PaginationWrapper
            currentPage={page}
            totalPage={total_pages}
            onPrevClick={handlePageChange}
            onNextClick={handlePageChange}
            handleFirstPage={handlePageChange}
            handleLastPage={handlePageChange}

        >
        <div className={styles.listWrapper}>
            {
                results && results.map(movie => <MovieItem item={movie} key={movie.id} onFilmClick={onFilmClick}/>)

            }
        </div>
        </PaginationWrapper>
    )
}
export default Home