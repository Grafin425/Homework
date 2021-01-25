import './App.css';
import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {setMovies} from "./redux";
import {Footer, Header} from "./conteiners";
import styles from './index.css'
import {ThemeProvider} from "styled-components";
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import usePersistedState from "./Utils/usePersistedState";
import Global from "./styles/Global";

function App() {
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    const [theme, setTheme] = usePersistedState('theme', light);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMovies())
    }, [])

    return (
        <ThemeProvider theme={theme}>
        <div className={styles.container}>
            <Global/>
            <div className={styles.wrapper}>
                <Header toggleTheme={toggleTheme} />
                <Footer />
            </div>
        </div>
        </ThemeProvider>
    );
}

export default App;
