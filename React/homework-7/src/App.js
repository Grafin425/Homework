import React, {useEffect} from 'react'
import CatalogList from "./components/catalog/CatalogList";
import Layout from "./components/Layout";
import {useDispatch, useSelector} from "react-redux";
import { setProducts } from "./redux";

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
   <div style={{margin:0,padding:0}}>
       <Layout/>
     <CatalogList/>
   </div>
  );
}

export default App;
