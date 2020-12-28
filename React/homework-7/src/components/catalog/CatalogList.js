import React from "react";
import {useSelector} from "react-redux";
import CatalogItem from "./CatalogItem";

const  CatalogList=()=> {

     const {products,wishlist,cart} = useSelector(({products: {products}, wishlist: { wishlist },cart:{cart}}) => ({
         products,
         wishlist,
         cart
     }))



     return (
        <div style={{display: 'flex', width: '98%', margin: '0 auto', flexWrap: 'wrap',}}>
            {products&& products.map(item =>
                <CatalogItem
                    isAddedToWishlist={!!wishlist.find(({ id }) => id === item.id)}
                    isAddedToCartlist={!!cart.find(({ id }) => id === item.id)}
                    item={item}
                    key={item.id}
                />)}
        </div>
    )
}
export default CatalogList