
export default function BasketItem ({item}) {
    console.log(item);
    const {id,title,price,description,image,category}=item
    return(
        <card
            style={{ marginTop: 16,width:600 }}
        >
            <img style={{wight:60,height:60}} src={image} alt=""/>
            {title}
        </card>
  )
}