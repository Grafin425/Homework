import {Card} from 'antd';
import 'antd/dist/antd.css';
import ShopIcon from "./ShopIcon";
import FollowIcon from "./FollowIcon";

const {Meta} = Card;
export default function CatalogItem({item, key}) {

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
                <FollowIcon id={key} />
                <ShopIcon id={key}/>

            </div>
        </Card>
    )
}
