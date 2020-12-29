import {Badge} from "antd";
import heart from "../../image/heart.svg";
import heartBlack from "../../image/like.svg";

const FollowIcon = ({isAddedToWishlist, onAddToWishList, item,}) => {

    return (
        <div>
            <a onClick={() => onAddToWishList(item)}>
                <Badge count={null}>
                    <img style={{wight: 22, height: 22}} src={isAddedToWishlist?heartBlack:heart} alt="heart"/>

                    <span className="head-example"/>
                </Badge>
            </a>
        </div>
    )
}
export default FollowIcon