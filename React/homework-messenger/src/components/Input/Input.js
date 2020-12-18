import React, {Component} from 'react';

class Input extends Component {
    render() {
        let {inputMess,onFormSubmit} = this.props;
        return (
            <div style={{paddingTop:180,paddingLeft:0}}>


                <form onSubmit={onFormSubmit} >
                    <input ref={inputMess} type="text" placeholder='message' />
                    <button>відправити</button>
                </form>
            </div>
        );
    }
}

export default Input;