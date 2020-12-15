import React, {Component} from 'react';
import UserServices from "../../services/UserServices";

class FullUsers extends Component {
    userServices=new UserServices()
    state={fullUser:null}
componentDidMount() {
        this.userServices.getUserById(this.props.id)
            .then(value =>
            this.setState({fullUser: value}))
    console.log(this.state.fullUser);
}
    render() {
        let {fullUser} = this.state;
        console.log(fullUser);

        return (
            <div>

            </div>
        );
    }
}

export default FullUsers;