import React from "react";

export const Good = ({good}) => (
    <div className={'good'}>
        <img src={`img/${good.img}`} alt={''}/>
        <h2>{good.title}</h2>
        <p>{good.desc}</p>
        <b>{good.price}$</b>
        <div className={'add-to-cart'}>+</div>
    </div>
);
