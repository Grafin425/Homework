import React, {Component} from 'react';

class Users extends Component {
    state={user:null,inputValue:''}

    inputMain=React.createRef();



    onInputFill=()=>{
        console.log(this.inputMain.current.value);
        this.setState({inputValue:this.inputMain.current.value})
    }

    onFormSubmit=(e)=>{
        e.preventDefault();
        if (this.state.inputValue>0 && this.state.inputValue<=10) {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.state.inputValue}`)
                .then(value => value.json())
                .then(value => {
                    this.setState({user: value})
                })
        }
        else {
            this.setState({user: {name:'Користувача з таким індетифікатором не знайдено',username:'Будь ласка введіть число від 1 до 10'}})
        }
    }

    render() {
        let {user,inputValue} = this.state;

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input ref={this.inputMain} type={'number'} onInput={this.onInputFill} value={inputValue}/>
                    <button>send</button>
                </form>
                <div>
                    {
                        user && <div>{user.name}--{user.username}</div>
                    }
                </div>
            </div>
        );
    }
}

export default Users;