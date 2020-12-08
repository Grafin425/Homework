import React, {Component} from 'react';
import UserServices from "../../services/UserServices";
import User from "../Item/User";
// import User from "../Item/User";

class AllUsers extends Component {
    userServices=new UserServices();
    state={allUsers:[]}

    async  componentDidMount() {
      let allUsers =await this.userServices.getAllUsers();
       this.setState({allUsers})
    }

    render() {
      let {allUsers} = this.state;
        console.log(allUsers);
        return (
            <div>
                {
                    allUsers.map(user=><User item={user} key={user.id}/>)

                }
            </div>
        );
    }
}

export default AllUsers;