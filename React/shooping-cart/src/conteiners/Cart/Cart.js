import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";
import BasketItem from "../../components/Item/BasketItem";
import React from "react";
import {clearCart} from '../../redux'

export default function Cart() {
    const dispatch = useDispatch()

    const clearCartClick = () => {
        dispatch(clearCart())
    }

    const {cart} = useSelector(({cart: {cart}}) => ({
        cart,
    }))

    let itemCount = cart.reduce((total, product) => total + product.quantity, 0);
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
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
                    <p>Total Items: <h2>{itemCount}</h2></p>
                    <p style={{marginTop: 20}}>Payment</p>
                    <h2>{total}$</h2>
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