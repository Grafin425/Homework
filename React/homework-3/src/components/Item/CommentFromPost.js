import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import UserServices from "../../services/UserServices";

class CommentFromPost extends Component {
    userServices = new UserServices()
    state = {id: null, comments: []}

    async componentDidMount() {
       await this.setState({id: this.props.id})
        this.userServices.getCommentByPost(this.state.id)
            .then(value => value.json())
            .then(value => {
                this.setState({comments: value})
            })
    }

    render() {
        let {id} = this.props;
        let {comments} = this.state;
        console.log('coommm');
        console.log(comments);
        return (
            <div>
                <h1>
                    Comment by Post id = {id}
                </h1>
                {
comments.map(comment=><div>{comment.name}</div>)
                }
            </div>
        );
    }
}

export default withRouter(CommentFromPost);