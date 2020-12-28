import {Badge} from "antd";
import basket from "../image/shopping-cart.svg";
import React from "react";
import atomic from '../image/atomic.png'
import heart from "../image/heart.svg";
import {useSelector} from "react-redux";

export default function Layout() {
    const {cart, wishlist} = useSelector(
        ({cart: {cart}, wishlist: {wishlist}}) => ({
            wishlist,
            cart
        })
    );
    const totalPrice = cart.reduce((acc, value) => {
        return acc + value.price;
    }, 0)


    return (
        <div style={{
            wight: "80%",
            height: 50,
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 10,
            marginLeft: 50,
            marginRight: 150
        }}>
            <div>
                <h3>Atomic
                    <img style={{marginLeft: 5}} src={atomic} alt="logo"/>
                </h3>
            </div>
            <div>
                <a title={wishlist.length}>
                    <Badge count={wishlist.length}>
                        <img style={{wight: 28, height: 28}} src={heart} alt="heart"/>
                        <span className="head-example"/>
                    </Badge>
                </a>
                <a title={`${totalPrice}$`} style={{marginLeft: 20}}>
                    <Badge count={cart.length}>
                        <img style={{wight: 28, height: 28}} src={basket} alt='shop'/>
                        <span className="head-example"/>
                    </Badge>
                </a>
            </div>
        </div>
    )
}