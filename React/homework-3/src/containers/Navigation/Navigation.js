import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AllUsers from "../../components/AllUsers/AllUsers";
import AllComments from "../../components/AllComments/AllComments";
import AllPosts from "../../components/AllPosts/AllPosts";

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                <Link to="/users" style={{marginRight:10}}>users</Link>
                <Link to="/comments"  style={{marginRight:10}}>comments</Link>
                <Link to="/posts">posts</Link>
                </div>
                <Switch>
                    <Route path='/users'>
                        <AllUsers/>
                    </Route>
                    <Route path='/comments'>
                        <AllComments/>
                    </Route>
                    <Route path='/posts'>
                        <AllPosts/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Navigation;