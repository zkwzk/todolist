import React, {useEffect, useState} from "react";
import Item from "./Item";

export default function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);
    return (<>
        {items.map((item) => {
            console.log(item.task)
            return (<Item key={item.id} item={item}/>);
        })}
    </>);
}