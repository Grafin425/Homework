import React, {useReducer, useState} from 'react'

export default function Notes () {
    const initialState=[];

    const reducer=(state,action)=>{
        switch (action.type){
            case 'ADD_NOTES': {
               state.unshift(action.payload);
                console.log(state);
                return state
            }
            default: {
                console.log('action not valid',action)
                return state;
            }
        }
    }

    const [state,dispatch]=useReducer(reducer,initialState);
    let [inputValue,inputChange]=useState([])

    const handleNotesChange=()=>{
        dispatch({type:'ADD_NOTES',payload:inputValue})
    }
  return(
      <div>
          <input
              value={inputValue}
          onInput={({target:{value}})=>inputChange(value)}/>
          <button onClick={handleNotesChange}>add notes</button>
          {state&& state.map(note=><div>{note}</div>)}
      </div>
  )
}