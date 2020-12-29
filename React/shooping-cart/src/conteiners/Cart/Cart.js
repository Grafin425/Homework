import {useSelector} from "react-redux";
import {Card} from "antd";
import BasketItem from "../../components/Item/BasketItem";
import React from "react";

export default function Cart () {
    const {cart}=useSelector(({cart:{cart}})=>({
        cart
    }))
    console.log(cart);
    return(
        <div className='align-center justify-center direction-column d-flex'>
            {
                cart.map(item=><BasketItem item={item}/>)
            }
        </div>

  )
}