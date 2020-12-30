import {useSelector} from "react-redux";

const Wishlist=()=>{
    const {wishlist}=useSelector(({wishlist:{wishlist}})=>({
        wishlist
    }))
    console.log(wishlist);
    return(
      <div>
          {
              wishlist && wishlist.map(item=><div key={item.id}>{item.category}-{item.price}</div>)
          }
      </div>
  )
}
 export default Wishlist