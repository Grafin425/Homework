import React, {Component} from 'react';
import UserServices from "../../services/UserServices";
import Comment from "../Item/Comment";

class AllComments extends Component {
    userServices=new UserServices()
    state={comments:[]}


   async componentDidMount() {
     let   comments= await this.userServices.getAllComments()
       this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        console.log(comments);
        return (
            <div>
                {
                    comments.map(comment=><Comment item={comment} key={comment.id}/>)
                }
            </div>
        );
    }
}

export default AllComments;