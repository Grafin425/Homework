import React, {Component} from 'react';
import CommentItem from "../Item/CommentItem";

class AllComents extends Component {
    state={comments:[],chosenComment:null}
    
    onSelectComments=(id)=>{
        let {comments} = this.state;
        let findComment = comments.find(value => value.id===id);
        this.setState({chosenComment: findComment})
        
    }
    render() {
        let {comments,chosenComment} = this.state;
        return (
            <div>
                <h1>Comments</h1>
                {
                    comments.map(comment=><CommentItem item={comment} onSelectComments={this.onSelectComments} />)
                }
                <hr/>
                {
                    chosenComment && <CommentItem item={chosenComment}/>
                }
            </div>
        );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments=>{
                this.setState({comments})
                }

            )
    }
}

export default AllComents;