import React, {useEffect, useState} from "react";
import CatalogItem from "./CatalogItem";

export default function CatalogList() {
    const [list, setList] = useState([])
    const FetchList = async () => {
       await fetch('https://fakestoreapi.com/products')
            .then(value => value.json())
            .then(value => setList(value))
    }

    useEffect(() => {
        FetchList()


    }, [])
    return (
        <div style={{display: 'flex', width: '98%', margin: '0 auto', flexWrap: 'wrap',}}>
            {list.map(item => <CatalogItem item={item} key={item.id}/>)}
        </div>
    )
}