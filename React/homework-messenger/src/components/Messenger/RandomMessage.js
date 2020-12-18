import React, {Component} from 'react';

class RandomMessage extends Component {




render() {
        let {id,messageRandom} = this.props;
    console.log(id);
    return (
            <div >
                {
                    messageRandom.value
                }
            </div>
        );
    }
}

export default RandomMessage;