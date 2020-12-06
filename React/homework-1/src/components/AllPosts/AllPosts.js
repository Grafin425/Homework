import React, {Component} from 'react';
import Item from "../Item/Item";

class AllPosts extends Component {
    state = {posts: [], chosenPost: null}


    onSelectPost = (id) => {
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chosenPost: find})

    }

    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                <h2>Posts</h2>
                {
                    posts.map(post => <Item item={post} onSelectUser={this.onSelectPost}/>)
                }
                <hr/>

                {
                    chosenPost && <Item item={chosenPost}/>
                }
            </div>

        );
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts})
            });
    }
}

export default AllPosts;