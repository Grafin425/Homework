import React, {Component} from 'react';
import UserServices from "../../services/UserServices";
import {Route, Switch, withRouter} from "react-router-dom";

import PostFromUser from "../PostFromUser/PostFromUser";
import User from "../Item/User";

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
                   <hr/>
                   <Switch>
                       <Route path={`${url}/:id/post`}  render={(props)=>{
                           let {match:{params:{id}}} = props;
                           return <PostFromUser id={id} key={id}/>}}/>
                   </Switch>
               </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);