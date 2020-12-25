import {Badge, Card} from 'antd';
import 'antd/dist/antd.css';
import heart from '../../image/heart.svg'
import basket from '../../image/shopping-cart.svg'
import {useDispatch} from "react-redux";
import {incCounter} from '../../redux'
import {incFollow} from "../../redux/action-creators/follow-action-creators";

const {Meta} = Card;
export default function CatalogItem({item}) {

    const dispatch = useDispatch();
    const handleInc = () => dispatch(incCounter());
    const followInc=()=>dispatch(incFollow())
    const {title, description, image, price} = item
    return (
        <Card
            hoverable
            style={{width: 240, margin: 20,}}
            cover={<img alt="example" src={image}/>}
        >
            <Meta title={title} description={description}/>
            <h2 style={{color:"green"}}>{price}$</h2>
            <div style={{display: 'flex', marginTop: 20, justifyContent: 'space-between'}}>
                <a onClick={followInc}>
                    <Badge count={null}>
                        <img style={{wight: 22, height: 22}} src={heart} alt="heart"/>
                        <span className="head-example"/>
                    </Badge>
                </a>

                <a onClick={handleInc}>
                    <Badge  count={null}>
                        <img style={{wight: 22, height: 22}} src={basket} alt='shop'/>
                        <span className="head-example"/>
                    </Badge>
                </a>
            </div>
        </Card>
    )
}
