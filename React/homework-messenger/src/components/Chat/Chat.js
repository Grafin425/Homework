import React, {Component} from 'react';
import Input from "../Input/Input";
import ChatField from "./ChatField";
import UserServices from "../../services/UserServices";

class Chat extends Component {
    userServices=new UserServices()
    state={messageRandom:{},massage:null}
    inputMess=React.createRef()




     Random=()=>{
         this.userServices.MessegeRandom()
            .then(value => {
                this.setState({messageRandom:value})
                console.log(this.state.messageRandom);

            })
    }
    onFormSubmit=(e,mess)=>{
        e.preventDefault()
        this.setState({massage:this.inputMess.current.value})
        console.log(this.state.massage);
        setTimeout(mess,2500)
    }
    render() {
        let {id} = this.props;
        let {messageRandom,massage} = this.state;
        return (
            <div>
                <h1 style={{margin:0}}>Chat</h1>
                <div>
                    <ChatField id={id} messageRandom={messageRandom} massage={massage} />
                <Input onFormSubmit={(e)=>{
                    this.onFormSubmit(e,this.Random)
                }} inputMess={this.inputMess} massage={massage}/>
                </div>
            </div>
        );
    }
}

export default Chat;