import {useDispatch, useSelector} from "react-redux";
import {MovieItem, PaginationWrapper, SearchInput} from "../../components";
import styles from './Home.module.css'
import {useHistory} from "react-router-dom";
import {setMovies, setMoviesByGenres, setMoviesSearch, setMoviesYear} from "../../redux/action-creators";
import React from "react";
import {InputSelect} from "../../components/Input/InputSelect";


export const Home = () => {
    const history = useHistory()
    const {movies, checked} = useSelector(({movies: {movies}, checked: {checked}}) => ({
        movies,
        checked,
    }))
    const dispatch = useDispatch()
    const onSearchMovie = async (value) => {
        await dispatch(setMoviesSearch({query: value}))
    }
    const {results, page, total_pages} = movies

    const onFilmClick = (film) => {
        history.push(`/movie/${film.id}`)
    }

    const handlePageChange = (page) => {
        dispatch(setMovies({page}))
    }
    return (
        <PaginationWrapper
            checked={checked}
            currentPage={page}
            totalPage={total_pages}
            onPrevClick={handlePageChange}
            onNextClick={handlePageChange}
            handleFirstPage={handlePageChange}
            handleLastPage={handlePageChange}

        >

            <div className={styles.filter}>
                <SearchInput onSearchMovie={onSearchMovie}/>
            </div>

            <div className={styles.listWrapper}>
                {
                    movies && results && results.map(movie => <MovieItem item={movie} key={movie.id}
                                                                         onFilmClick={onFilmClick} isClicked={true}/>)

                }

            </div>
        </PaginationWrapper>
    )
}
