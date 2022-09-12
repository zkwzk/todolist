import React from "react";
import Item from "./Item";

export default function ItemList(props) {
    const {items, onChange} = props;
    return (<>
        {items.length > 0
            ? items.map((item) =>
                (<Item key={item.id} item={item} onChange={() => onChange(item.id)}/>)
            )
            : <div>You have done everything!</div>}
    </>);
}