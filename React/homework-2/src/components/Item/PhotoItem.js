import React, {Component} from 'react';

class PhotoItem extends Component {
    render() {
        let {item,onSelectPhoto} = this.props
        return (
            <div style={{display:'flex'}}>
                <div>{item.id}-{item.title}</div>
                <button onClick={()=>onSelectPhoto(item.id)}>click me!!</button>
            </div>
        );
    }
}

export default PhotoItem;