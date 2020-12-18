import React, {Component} from 'react';
import Message from "../../components/Messenger/Message";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to='/'>home</Link>-
                        <Link to='/mess'>messenger</Link>
                    </div>
                    <Switch>
                        <Route path='/' exact={true}>
                            'its home'

                        </Route>
                        <Route path='/mess'>
                            <Message/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Navigation;