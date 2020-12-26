import {Badge} from "antd";
import heart from "../../image/heart.svg";
import heartBlack from '../../image/like.svg'
import {decFollow, incFollow} from "../../redux/action-creators";
import {useDispatch, useSelector} from "react-redux";

export default function FollowIcon() {
    const followInc = () => dispatch(incFollow())
    const followDec = () => dispatch(decFollow())
    const {itemFollow} = useSelector(({itemFollow: {itemFollow}}) => ({
        itemFollow
    }))

    const dispatch = useDispatch();

    return (
        <div>
            {itemFollow ?

                <a onClick={followInc}>
                    <Badge count={null}>
                        <img style={{wight: 22, height: 22}} src={heart} alt="heart"/>
                        <span className="head-example"/>
                    </Badge>
                </a>
                :
                <a onClick={followDec}>
                    <Badge count={null}>
                        <img style={{wight: 22, height: 22}} src={heartBlack} alt="heart"/>
                        <span className="head-example"/>
                    </Badge>
                </a>

            }
        </div>
    )
}