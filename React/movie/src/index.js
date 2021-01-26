import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux";
import {BrowserRouter as Router} from "react-router-dom";
import {Auth0Provider} from '@auth0/auth0-react'

const domain = process.env.React_App_Auth0_Domain;
const clientId = process.env.React_App_Auth0_Client_Id;


ReactDOM.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </Auth0Provider>,
    document.getElementById('root')
);
