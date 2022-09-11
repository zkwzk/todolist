import React, {useEffect, useState} from "react";
import Item from "./Item";

export default function ItemList() {
    const [items, setItems] = useState([]);
    const onChange = (id) => {
        fetch('http://localhost:3001/done', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        }).then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    };

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
        {items.length > 0 ? items.map((item) => {
            return (<Item key={item.id} item={item} onChange={() => onChange(item.id)}/>);
        }) : <div>You have done everything!</div>}
    </>);
}