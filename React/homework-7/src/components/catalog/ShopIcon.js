import {Badge} from "antd";
import shop from "../../image/shopping-cart.svg";
import shopBlack from "../../image/shopping-cart-black.svg";
import {incCounter} from "../../redux/action-creators";
import {useDispatch, useSelector} from "react-redux";

export default function ShopIcon () {
    const dispatch = useDispatch();

    const handleInc = () => dispatch(incCounter());
    const {shopIcon} = useSelector(({shopIcon: {shopIcon}}) => ({
        shopIcon
    }))

    console.log(shopIcon);
    return(
      <div>
          {
              shopIcon?
                  <a onClick={handleInc}>
                      <Badge  count={null}>
                          <img style={{wight: 22, height: 22}} src={shopBlack} alt='shop'/>
                          <span className="head-example"/>
                      </Badge>
                  </a>
                  :
                  <a onClick={handleInc}>
                      <Badge  count={null}>
                          <img style={{wight: 22, height: 22}} src={shop} alt='shop'/>
                          <span className="head-example"/>
                      </Badge>
                  </a>
          }


      </div>
  )
}