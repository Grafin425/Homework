
import React, {Component} from 'react';
import Item from "../Item/Item";
import UserServices from "../../services/UserServices";

class AllUsers extends Component {
    state={users:[],chosenOne:null}
    userServices=new UserServices();



    onSelectUser=(id)=> {
        this.userServices.getCarById('users',id).then(value => this.setState({chosenOne:value}))}
    componentDidMount() {
        this.userServices.getAll('users').then(value => this.setState({users:value}))

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

}

export default AllUsers;