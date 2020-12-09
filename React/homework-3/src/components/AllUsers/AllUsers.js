import React, {Component} from 'react';
import UserServices from "../../services/UserServices";
import User from "../Item/User";
import {Route, Switch, withRouter} from "react-router-dom";

import FullUsers from "../FullUsers/FullUsers";

class AllUsers extends Component {
    userServices=new UserServices();
    state={allUsers:[]}

    async  componentDidMount() {
      let allUsers =await this.userServices.getAllUsers();
       this.setState({allUsers})
    }

    render() {
      let {allUsers} = this.state;
      let{match:{url}}=this.props
        return (
            <div>
                {
                    allUsers.map(user=><User item={user} key={user.id}/>)

                }
               <div>
                   <Switch>
                       <Route path={`${url}/:id`} exact={true} render={(props)=>{
                           let {match:{params:{id}}} = props;
                           return <FullUsers id={id}/>}}/>
                   </Switch>
               </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);