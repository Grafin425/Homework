import './App.css';
import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {setMovies} from "./redux";
import Home from "./conteiners/Home/Home";
import Header from "./conteiners/Header/Header";
import {Container, Wrapper} from "./style";

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMovies())
    }, [])

    return (
        <Container>
            <Wrapper>
                <Header/>
                <Home/>
            </Wrapper>
        </Container>
    );
}

export default App;
