import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class PostItem extends Component {
    render() {
        let {post,match:{url}} = this.props;
        console.log(url);
        return (
            <div>
                {post.title}-<button><Link to={`${url}/${post.id}/comment`}>All Comment</Link></button>
            </div>
        );
    }
}

export default withRouter(PostItem);