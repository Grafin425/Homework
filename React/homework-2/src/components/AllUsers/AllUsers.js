
import React, {Component} from 'react';
import Item from "../Item/Item";
import UserServices from "../../services/UserServices";

class AllUsers extends Component {
    
    render() {
        let {users,
        onSelectComments} = this.props;

        return (
            <div>
                <h1>User</h1>
                {
                    users.map(user=><Item item={user} key={user.id} onSelectComments={onSelectComments} />)

                }
                <br/>
                {
                }
            </div>
        );
    }

}

export default AllUsers;