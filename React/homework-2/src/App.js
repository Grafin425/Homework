import React, {Component} from 'react';
import AllUsers from "./components/AllUsers/AllUsers";
import UserServices from "./services/UserServices";

class App extends Component {
    userServices=new UserServices();
    state = {
        users: [],
        posts: [],
        userPosts: []
    }
    //
    // showPostst = (id) => {
    //     let arr = [];
    //     let xxx = this.state.posts.filter(post => post.userId === id);
    //     arr.push(xxx);
    //     this.setState({userPosts: arr})
    // }

    componentDidMount() {
        this.userServices.getAll('users').then(value => this.setState({users:value}))
        // this.userServices.getAll('comments').then(value => this.setState({comments:value}))

    }
    render() {
        let {posts,userPosts,users} = this.state;
        return (
            <div>
                <AllUsers showPostst={this.showPostst} onSelectComments={this.onSelectComments} posts={users}/>

                <hr/>
                {/*<AllPosts/>*/}
                {/*<hr/>*/}
                {/*<AllComents/>*/}
                {/*<hr/>*/}
                {/*<AllPhoto/>*/}
            </div>
        );
    }
}

export default App;