import React, {Component} from 'react';
import CommentItem from "../Item/CommentItem";
import UserServices from "../../services/UserServices";

class AllComents extends Component {
    userServices=new UserServices();
    state={comments:[],chosenComment:null}

    onSelectComments=(id)=>{
        this.userServices.getCarById('comments',id).then(value => this.setState({chosenComment:value}))


    }

    componentDidMount() {
        this.userServices.getAll('comments').then(value => this.setState({comments:value}))

    }
    render() {
        let {comments,chosenComment} = this.state;
        return (
            <div>
                <h1>Comments</h1>
                {
                    comments.map(comment=><CommentItem key={comment.id} item={comment} onSelectComments={this.onSelectComments} />)
                }
                <hr/>
                {
                    chosenComment && <CommentItem item={chosenComment}/>
                }
            </div>
        );
    }

}

export default AllComents;