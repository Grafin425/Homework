import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {CardWrapper} from "./FullContact.style";



class FullContact extends Component {
    render() {
        let {item,key,id,match:{url}} = this.props;
        return (
            <div style={CardWrapper}>
                {item.id}
                {<img alt="example" src={item.img} />}
                <Link to={`${url}/${id}`}> {item.name}</Link>
            </div>
        );
    }
}

export default withRouter(FullContact);