import {Badge} from "antd";
import shop from "../../image/shopping-cart.svg";
import shopBlack from "../../image/shopping-cart-black.svg";

export default function ShopIcon ({onAddToCartList,item,isAddedToCartlist}) {

    return(
      <div>

                  <a onClick={()=>onAddToCartList(item)}>
                      <Badge  count={null}>
                          <img style={{wight: 22, height: 22}} src={isAddedToCartlist?shopBlack:shop} alt='shop'/>
                          <span className="head-example"/>
                      </Badge>
                  </a>

      </div>
  )
}