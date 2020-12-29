import './App.css';
import Navigation from "./conteiners/Navigation/Navigation";
import Footer from "./conteiners/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./redux/action-creators";
import React, {useEffect} from "react";

function App() {
    const { cart, wishlist, products } = useSelector(
        ({ cart: { cart }, wishlist: { wishlist }, products: { products } }) => ({
            cart,
            wishlist,
            products
        })
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProducts());
    }, []);
  return (
      <div>
          <Navigation/>
          <Footer/>
      </div>
  );
}

export default App;
