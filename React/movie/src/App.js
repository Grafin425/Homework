import './App.css';
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setMovies} from "./redux";
import {Footer, Header} from "./conteiners";
import styles from './index.css'
import {ThemeProvider, DefaultTheme} from "styled-components";
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import {searchService} from "./services";
import usePersistedState from "./Utils/usePersistedState";
import Global from "./styles/Global";

function App() {
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    const [theme, setTheme] = usePersistedState('theme', light);
    const onSearchMovie= async (value)=>{
        let promise =  await searchService.getMoviesBySearch(value).then();

        console.log(promise);
    }

    const {checked} = useSelector(({checked:{checked}}) => ({
        checked,
    }))



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMovies())
    }, [])

    return (
        <ThemeProvider theme={theme}>
        <div className={styles.container}>
            <Global/>
            <div className={styles.wrapper}>
                <Header toggleTheme={toggleTheme}  onSearchMovie={onSearchMovie}/>
                <Footer />
            </div>
        </div>
        </ThemeProvider>
    );
}

export default App;
