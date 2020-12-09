import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>{item.id}--{item.title}--{item.body}</div>
        );
    }
}

export default Comment;