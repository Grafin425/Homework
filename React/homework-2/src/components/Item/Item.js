import React, {Component} from 'react';

class Item extends Component {
    render() {
        let {item,onSelectUser}=this.props
        return (
            <div style={{display:'flex'}}>
                <div>{item.name}-{item.id}-{item.title}</div>
                <button style={{marginLeft:'20px'}} onClick={()=>onSelectUser(item.id)}>click me!</button>
            </div>
        );
    }
}

export default Item;