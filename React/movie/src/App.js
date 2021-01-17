import './App.css';
import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {setMovies} from "./redux";
import Header from "./conteiners/Header/Header";
import styles from './index.css'
import {searchService} from "./services";
import {Footer} from "./conteiners/Footer";

function App() {
    const onSearchMovie= async (value)=>{
        let promise =  await searchService.getMoviesBySearch(value).then();
        console.log(promise);

    }


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMovies())
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Header onSearchMovie={onSearchMovie}/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
