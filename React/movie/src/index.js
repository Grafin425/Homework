import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux";
import {BrowserRouter as Router} from "react-router-dom";
import {Auth0Provider} from '@auth0/auth0-react'

const domain = 'dev-wobdetl4.us.auth0.com';
const clientId = 'KsQjHsBFxNUGW01sZ0FMl62VCGSFbwO2';

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
