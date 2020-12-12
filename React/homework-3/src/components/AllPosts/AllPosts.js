import React, {Component} from 'react';
import UserServices from "../../services/UserServices";
import Post from "../Item/Post";

class AllPosts extends Component {
    userServices=new UserServices()
    state={AllPosts:[]}

  async  componentDidMount() {
        let AllPosts = await this.userServices.getAllPosts();
        this.setState({AllPosts})

    }

    render() {
        let {AllPosts} = this.state;
        return (
            <div>
                {
                    AllPosts.map(post=><Post item={post } key={post.id}/>)
                }
            </div>
        );
    }
}

export default AllPosts;