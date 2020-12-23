import React, {useEffect, useReducer, useState} from "react";

export default function Hooks() {

    const reducer=(state,action)=>{
        switch (action.type){
            case 'SET_TODO_ITEM':{
                console.log('log');
                return action.payload;
            }
            case 'RESET_TODO_ITEM':{
                return null;
            }
            case 'SET_DEFAULT_ITEM':{
                return action.payload;
            }
            case 'CHANGE_TODO_TITLE':{
                return {
                    ...state,
                    title:action.payload}
            }
            case 'TOGGLE_STATUS_USER':{
                console.log('toggle')
                return {
                    ...state,
                    completed: !state.completed
                }
            }
            default:{
                console.log('not valid action',action.type);
                return state;
            }
        }
    }

    const initialState=null;
    const [counter, setCounter] = useState(1)
    const [user,setUser] = useState();
    const [todo,setTodo] = useState();
    const [state,dispatch]=useReducer(reducer,initialState)

    const fetchData= async ()=>{
     const response=  await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        let json = await response.json();

     dispatch({type:'SET_TODO_ITEM',payload:json})

    }

    useEffect(()=>{
        fetchData();
    },[counter])

    const handleIcn = () => {
        setCounter((prevState)=>prevState+1)
    }
    const handleReset=()=>{
        setCounter(1)
    }
    const handleSetUser=()=>{
        dispatch({type:'SET_DEFAULT_ITEM',payload:{id:1,title:'default title',completed:true}})
    }
    const handleResetUser=()=>{
        dispatch({type:'RESET_TODO_ITEM'})
    }
    const toggleStatusUser=()=>{
        dispatch({type:'TOGGLE_STATUS_USER'})
    }
    const onTitleChange=()=>{
        dispatch({type:'CHANGE_TODO_TITLE',payload:Math.random()})
    }
    return (
        <div >
            <h1>Counter: {counter}</h1>
            <button onClick={handleIcn}>inc +1</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleSetUser}>set user</button>
            <button onClick={handleResetUser}>reset user</button>
            <button onClick={toggleStatusUser}>toggle status</button>
            <button onClick={onTitleChange}>change todo title </button>
            {!! state && (<h2>{state.id}-{state.title}-{state.completed.toString()}</h2>)}
        </div>
    )
}