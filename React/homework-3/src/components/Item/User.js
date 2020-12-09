import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <div>{item.id}--{item.name}--{item.username}</div>
            </div>
        );
    }
}

export default User;