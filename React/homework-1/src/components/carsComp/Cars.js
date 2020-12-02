import React, {Component} from 'react';

class Cars extends Component {
    render() {
        let {item}=this.props
        return (
                <div>{item.color}-{item.model}-{item.power}-{item.year}</div>
        );
    }
}

export default Cars;