// import React, {Component} from 'react';
// import PhotoItem from "../Item/PhotoItem";
// import UserServices from "../../services/UserServices";
//
// class AllPhoto extends Component {
//     state={photos:[],chosenPhoto:null}
//     userServices=new UserServices();
//
//     componentDidMount() {
//         this.userServices.getAll('photos').then(value => this.setState({photos:value}))
//
//     }
//
//     onSelectPhoto=(id)=>{
//         this.userServices.getCarById('photos',id).then(value => this.setState({chosenPhoto:value}))
//
//
//
//     }
//     render() {
//         let {photos,chosenPhoto} = this.state;
//         return (
//             <div>
//                 <h1>Photos</h1>
//                 {
//                     photos.map(photo=><PhotoItem key={photo.id} item={photo} onSelectPhoto={this.onSelectPhoto}/>)
//                 }
//                 <hr/>
//                 {
//                     chosenPhoto && <PhotoItem item={chosenPhoto}/>
//                 }
//             </div>
//         );
//     }
// }
//
// export default AllPhoto;