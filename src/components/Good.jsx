import React from "react";

export const Good = ({good, onAdd, order}) => {
    const addOrder = good => {
        order[good.id]
            ? onAdd({...order, [good.id]: order[good.id] + 1})
            : onAdd({...order, [good.id]: 1})
    }

    return (
        <div className={'good'}>
            <img src={`img/${good.img}`} alt={''}/>
            <h2>{good.title}</h2>
            <p>{good.desc}</p>
            <b>{good.price}$</b>
            <div
                onClick={() => addOrder(good)}
                className={'add-to-cart'}>+
            </div>
        </div>
    );
}
