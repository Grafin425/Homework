import plus from '../../image/plus.svg'
import minus from '../../image/minus.svg'
import trash from '../../image/trash.png'
import {useDispatch} from "react-redux";
import {removeItem,addItemQty,decrease} from '../../redux'

export default function BasketItem({item}) {
    const dispatch = useDispatch();
    const removeItemFunc=(item)=>{
        dispatch(removeItem(item))
    }
    const qtyItem=(item)=>{
        dispatch(addItemQty(item))
    }
    const minusItem=(item)=>{
        dispatch(decrease(item))
    }

    const { title, price, image,quantity} = item
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
            <p className='qty'> Qty:{quantity}</p>

            <span style={{marginBottom:10}}>
                {item.quantity>1 &&
                    <img onClick={() => minusItem(item)} src={minus} style={{wight: 22, height: 22}}
                         className='icon' alt=""/>
                }
                {item.quantity===1 &&
                <img onClick={() => removeItemFunc(item)} src={trash} style={{wight: 22, height: 22}}
                     className='icon' alt=""/>
                }

            <img onClick={()=>qtyItem(item)} className='icon' src={plus} style={{wight: 22, height: 22,marginLeft:10}} alt=""/>
            </span>
        </card>
    )
}