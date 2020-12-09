import React, {Component} from 'react';

class FullUsers extends Component {

    render() {
        let {id} = this.props;
        return (
            <div>
                {id}
            </div>
        );
    }
}

export default FullUsers;