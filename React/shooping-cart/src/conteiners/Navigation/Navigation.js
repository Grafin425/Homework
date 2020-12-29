import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Shop from "../Shop/Shop";
import About from "../About/About";
import Cart from "../Cart/Cart";
import {Badge} from "antd";
import shop from "../../image/shopping-cart.svg";
import {useSelector} from "react-redux";
import heart from "../../image/heart.svg";

const Navigation = () => {
    const {wishlist, cart} = useSelector(({wishlist: {wishlist}, cart: {cart}}) => ({
        wishlist,
        cart,

    }))
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)

    return (
        <Router>
            <header className="d-flex  justify-around">
                <Link className="border" to='/'>Shop</Link>
                <Link className="border" to='/about'>About</Link>

                <span className="justify-between">
                    <Badge count={wishlist.length}>
                        <img style={{wight: 22, height: 22}} src={heart} alt="heart"/>

                        <span className="head-example"/>
                    </Badge>
                    <Link style={{marginLeft: 30}} to='/cart'>
                        <Badge count={cart.length}>
                            <img title={`товару на ${total}$`} style={{wight: 22, height: 22}} src={shop} alt='shop'/>
                            <span className="head-example"/>
                        </Badge>
                </Link>
                   </span>
            </header>
            <Switch>
                <Route path='/' exact={true}>
                    <Shop/>
                </Route>
                <Route path='/about' exact={true}>
                    <About/>
                </Route>
                <Route path='/cart' exact={true}>
                    <Cart/>
                </Route>
            </Switch>
        </Router>
    )
}
export default Navigation