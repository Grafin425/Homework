import React, {Component} from 'react';
import PhotoItem from "../Item/PhotoItem";

class AllPhoto extends Component {
    state={photos:[],chosenPhoto:null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(photos=>{
                this.setState({photos})
            })
    }

    onSelectPhoto=(id)=>{
        let {photos} = this.state;
        let findPhotos = photos.find(value => value.id===id);
        this.setState({chosenPhoto:findPhotos})


    }
    render() {
        let {photos,chosenPhoto} = this.state;
        return (
            <div>
                <h1>Photos</h1>
                {
                    photos.map(photo=><PhotoItem item={photo} onSelectPhoto={this.onSelectPhoto}/>)
                }
                <hr/>
                {
                    chosenPhoto && <PhotoItem item={chosenPhoto}/>
                }
            </div>
        );
    }
}

export default AllPhoto;