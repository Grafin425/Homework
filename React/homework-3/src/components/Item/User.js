import React, {Component} from 'react';
import {
    Link,
    withRouter,
} from "react-router-dom";

class User extends Component {
    render() {
        let {item,match:{url}} = this.props;
        console.log(this.props);
        return (
                <div style={{display: 'flex'}}>
                    <div>{item.name}--{item.username}-<button><Link to={`${url}/${item.id}/post`}>All Posts</Link></button></div>
                </div>
        );
    }
}

export default withRouter(User);