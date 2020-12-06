import React, {Component} from 'react';

class CommentItem extends Component {
    render() {
        let {item,onSelectComments} = this.props;
        return (
            <div style={{display:'flex'}}>
                <div>{item.id}  name-{item.name}  email-{item.email}</div>
                <button onClick={()=>onSelectComments(item.id)}>click me!!!</button>
            </div>
        );
    }
}

export default CommentItem;