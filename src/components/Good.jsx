import React from "react";

export const Good = ({good, onAdd, order, name}) => {
    const addOrder = (name, good) => {
        order[name]
            ? onAdd({...order, [name]: {...good, count: order[name].count + 1}})
            : onAdd({...order, [name]: {...good, count: 1}})
    }
    return (
        <div className={'good'}>
            <img src={`img/${good.img}`} alt={''}/>
            <h2>{good.title}</h2>
            <p>{good.desc}</p>
            <b>{good.price}$</b>
            <div
                onClick={() => addOrder(name, good)}
                className={'add-to-cart'}>+
            </div>
        </div>
    );
}
