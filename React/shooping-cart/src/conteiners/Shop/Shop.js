import React from 'react'
import {useSelector} from "react-redux";
import CartItem from "../../components/Item/CartItem";

const Shop= ()=> {
    const {products,wishlist,cart} = useSelector(({products: {products}, wishlist: { wishlist },cart:{cart}}) => ({
        products,
        wishlist,
        cart
    }))
    return(
      <div style={{display: 'flex', width: '98%', margin: '0 auto', flexWrap: 'wrap',}}>
          {products&& products.map(item =>
              <CartItem
                  isAddedToWishlist={!!wishlist.find(({ id }) => id === item.id)}
                  isAddedToCartlist={!!cart.find(({ id }) => id === item.id)}
                  item={item}
                  key={item.id}
              />)}
              shop
      </div>
  )
}
export default Shop