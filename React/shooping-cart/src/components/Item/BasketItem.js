import {Button} from "antd";
import plus from '../../image/plus.svg'
import minus from '../../image/minus.svg'

export default function BasketItem({item}) {
    console.log(item);
    const {id, title, price, description, image, category} = item
    return (
        <card
        >
            <info className="d-flex">
                <img style={{wight: 60, height: 60}} src={image} alt=""/>
                <div>
                    {title}
                    <div>
                        Price:{price}
                    </div>
                </div>
            </info>

            <span style={{marginBottom:10}}>
            <img src={minus} style={{wight: 22, height: 22}} alt=""/>
            <img src={plus} style={{wight: 22, height: 22,marginLeft:10}} alt=""/>
            </span>
        </card>
    )
}