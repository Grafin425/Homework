// import React, {Component} from 'react';
// import Item from "../Item/Item";
// import UserServices from "../../services/UserServices";
//
// class AllPosts extends Component {
//     state = {posts: [], chosenPost: null}
//     userServices=new UserServices();
//
//
//
//     onSelectPost = (id) => {
//         this.userServices.getCarById('posts',id).then(value => this.setState({chosenPost:value}))
//
//
//     }
//
//     componentDidMount() {
//         this.userServices.getAll('posts').then(value => this.setState({posts:value}))
//     }
//
//
//     render() {
//         let {posts, chosenPost} = this.state;
//         return (
//             <div>
//                 <h2>Posts</h2>
//                 {
//                     posts.map(post => <Item item={post} key={post.id} onSelectUser={this.onSelectPost}/>)
//                 }
//                 <hr/>
//
//                 {
//                     chosenPost && <Item item={chosenPost}/>
//                 }
//             </div>
//
//         );
//     }
//
// }
//
// export default AllPosts;