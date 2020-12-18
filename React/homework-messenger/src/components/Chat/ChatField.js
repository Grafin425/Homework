import React, {Component} from 'react';
import RandomMessage from "../Messenger/RandomMessage";

class ChatField extends Component {
    render() {
        let {id,messageRandom,massage} = this.props;
        return (
            <div>
                {massage}
                <RandomMessage id={id} messageRandom={messageRandom}/>
            </div>
        );
    }
}

export default ChatField;