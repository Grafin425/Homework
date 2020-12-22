import React, {useEffect, useState} from "react";

export default function Hooks() {
    const [counter, setCounter] = useState(1)
    const [user,setUser] = useState();
    const [todo,setTodo] = useState();

    const fetchData= async ()=>{
     const response=  await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        let json = await response.json();
        console.log(json);
        setTodo(json)

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
        setUser({
            name:'test',
            age:22,
        })
    }
    const handleResetUser=()=>{
        setTodo(null)
    }
    return (
        <div >
            <h1>Counter: {counter}</h1>
            <button onClick={handleIcn}>inc +1</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleSetUser}>set user</button>
            <button onClick={handleResetUser}>reset user</button>
            {!! todo && (<h2>{todo.id}-{todo.title}-{todo.completed.toString()}</h2>)}
        </div>
    )
}