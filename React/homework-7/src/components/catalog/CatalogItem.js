import {Card} from 'antd';
import 'antd/dist/antd.css';
import ShopIcon from "./ShopIcon";
import FollowIcon from "./FollowIcon";
import {useDispatch} from "react-redux";
import {toggleItemInWishList,toggleItemInCart} from "../../redux";

const {Meta} = Card;
 const CatalogItem=({item, key,isAddedToWishlist,isAddedToCartlist})=> {
     const dispatch=useDispatch();
     const onAddToWishList = (item) => {
         dispatch(toggleItemInWishList(item));
     };
     const onAddToCartList=(item)=>{
         dispatch(toggleItemInCart(item))
     }


     const {title, description, image, price,} = item
    return (
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
                <ShopIcon
                    id={key}
                    item={item}
                    onAddToCartList={onAddToCartList}
                    isAddedToCartlist={isAddedToCartlist}

                />

            </div>
        </Card>
    )
}
export default CatalogItem
