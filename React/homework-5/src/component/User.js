import React, {useEffect} from 'react'



export default function User(props) {

    useEffect(()=>{
        console.log('delete');
    },[])

    let {item,onDeleteUser} = props;
    return (
        <div>
            {item.id}-{item.name}
            <button onClick={()=>{
                onDeleteUser(item.id)
            }}>delete</button>
        </div>
    )
}