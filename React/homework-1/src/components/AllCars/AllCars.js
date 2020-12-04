import React, {Component} from 'react';
import Item from "../Item/Item";

class AllCars extends Component {
    state={users:[],chosenOne:null}
    
    
    onSelectUser=(id)=> {
            let {users} = this.state;
            let find = users.find(value => value.id===id);
            this.setState({chosenOne:find})

    }
    
    render() {
        let {users,chosenOne}=this.state;
        return (
            <div>
                <h1>User</h1>
                {
                    users.map(user=><Item item={user} key={user.id} onSelectUser={this.onSelectUser} />)
                }
                <br/>
                {
                    chosenOne && <Item item={chosenOne} />
                }
            </div>
        );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users=>{
                this.setState({users});
            })
    }
}

export default AllCars;