import './App.css';
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setMovies} from "./redux";

function App() {
    const {movies} = useSelector(({movies: {movies}}) => ({
        movies
    }))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMovies())
    }, [])
    const {results}=movies
    console.log(results);
    return (
        <div>
            {
                results.map(movie => <div>{movie.id}-{movie.poster_path} <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""/></div>)
            }
        </div>

    );
}

export default App;
