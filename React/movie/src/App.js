import './App.css';
import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {setMovies} from "./redux";
import Header from "./conteiners/Header/Header";
import styles from './index.css'

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMovies())
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Header/>
            </div>
        </div>
    );
}

export default App;
