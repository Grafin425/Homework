import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";
import BasketItem from "../../components/Item/BasketItem";
import React from "react";
import {clearCart} from '../../redux'

export default function Cart() {
     const dispatch=useDispatch()

    const clearCartClick=()=>{
        dispatch(clearCart())
    }


    const {cart} = useSelector(({cart: {cart} }) => ({
        cart,
    }))
    // const total = cart.reduce((acc, value) => {
    //     return acc + value.price
    // }, 0)
    // const tatalPrice = Math.floor(total)
    return (
        <div className="d-flex justify-center align-center">
            <div className='align-center justify-center direction-column d-flex'>
                {
                    cart.map(item => <BasketItem item={item}/>)
                }
            </div>
            {cart.length &&
            <checkout>
                <total>
                    <p>Total Items: <h2>{cart.length}</h2></p>
                    <p style={{marginTop: 20}}>Payment</p>
                    <h2>$</h2>
                </total>

                <operations>
                    <Button>CHECKOUT</Button>
                    <Button onClick={() => clearCartClick()}>CLEAR </Button>
                </operations>

            </checkout>
            }
        </div>

    )
}