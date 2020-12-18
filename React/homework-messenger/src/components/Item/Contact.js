import React, {Component} from 'react';
import {contactsDb} from '../../db/contacts'
import FullContact from "./FullContact";
import {Route, Switch, withRouter} from "react-router-dom";
import Chat from "../Chat/Chat";


class Contact extends Component {
    state={contacts:contactsDb,search:''}


    // onSearch=(e)=>{
    //     e.preventDefault()
    //     let {contacts} = this.state;
    //     let InputValue = this.SearchInput.current.value;
    //      InputValue.toLowerCase()
    //     this.setState({contacts})
    //      let filterContact=contacts.filter((contacts)=>{
    //          let filterName=contacts.name.toLowerCase().indexOf(InputValue.toLowerCase())!==-1
    //          console.log(filterName);
    //          return  filterName
    //      })
    //     return filterContact
    //
    // }
    updateSearch(event){
        this.setState({search:event.target.value.substr(0,20)})
    }

    render() {
        let {match:{url}} = this.props;
        let {contacts,search} = this.state;

        let filterContact=contacts.filter((contacts)=>{
            let filterName=contacts.name.toLowerCase().indexOf(search.toLowerCase())!==-1
            return filterName
        })
        return (
            <div style={{display:'flex'}}>
                <div >
                    <input type="text" value={search} onChange={this.updateSearch.bind(this)}/>
                {

                    filterContact.map((contact,index)=><FullContact item={contact} key={index} id={index}/>)
                }
                </div>
                <div style={{marginLeft:10,paddingLeft:20,borderLeft:'1px solid #000'}}>
                {
                    <Switch>
                        <Route path={`${url}/:id`} exact={true} render={(props)=>{
                            let {match:{params:{id,name}}}=props
                            console.log(id);
                            return <Chat id={id} name={name} key={id}/>

                        }} >
                        </Route>
                    </Switch>
                }
                </div>
            </div>
        );
    }
}

export default  withRouter(Contact);