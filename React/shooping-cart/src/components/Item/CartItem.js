import {Card} from 'antd';
import 'antd/dist/antd.css';
import {useDispatch} from "react-redux";
import {toggleItemInCart, toggleItemInWishList} from "../../redux";
import CartIcon from "../Icon/CartIcon";
import FollowIcon from "../Icon/FollowIcon";

const {Meta} = Card;
const CartItem =({item, key,isAddedToWishlist,isAddedToCartlist})=> {
     const dispatch=useDispatch();
     const onAddToWishList = (item) => {
         dispatch(toggleItemInWishList(item));
     };
     const onAddToCartList=(item)=>{
         dispatch(toggleItemInCart(item))
     }


     const {title, description, image, price,} = item
  return(
      <Card
          hoverable
          style={{width: 240, margin: 20,}}
          cover={<img alt="example" src={image}/>}
      >
          <Meta title={title} description={description}/>
          <h2 style={{color:"green"}}>{price}$</h2>
          <div style={{display: 'flex', marginTop: 20, justifyContent: 'space-between'}}>
              <FollowIcon
                  id={key}
                  item={item}
                  isAddedToWishlist={isAddedToWishlist}
                  onAddToWishList={onAddToWishList}

              />
              <CartIcon
                  id={key}
                  item={item}
                  onAddToCartList={onAddToCartList}
                  isAddedToCartlist={isAddedToCartlist}

              />

          </div>
      </Card>
  )
}
 export default CartItem