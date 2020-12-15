import React, {Component} from 'react';
import UserServices from "../../services/UserServices";
import PostItem from "../Item/PostItem";
import {Route, Switch, withRouter} from "react-router-dom";
import CommentFromPost from "../Item/CommentFromPost";

class PostFromUser extends Component {
    userServices=new UserServices()

    state={posts:[],id:null}
  async  componentDidMount() {
      await  this.setState({id:this.props.id})
      this.userServices.getPostByUserId(this.state.id)
           .then(value => value.json())
           .then(value => {
               this.setState({posts:value})
           })
    }

    render() {
        // let {id} = this.props;
        let {posts,id} = this.state;
        let{match:{url}}=this.props


        console.log(url);
        console.log(posts);
        return (
            <div>
                <h1>
                    {
                    `post by user id=${id}`
                }
                </h1>
                {
                    posts.map(post=><PostItem post={post} key={post.id}/>)
                }
                <Switch>
                    <Route path={`${url}/:id/comment`} exact={true} render={(props)=>{
                        let {match:{params:{id}}} = props;
                        return <CommentFromPost id={id} key={id}/>}}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(PostFromUser);