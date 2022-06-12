import React from "react";
import {FaTrash} from 'react-icons/fa'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import {FaArrowAltCircleDown} from 'react-icons/fa'

export const Order = ({id, order, changeOrder}) => {

    const change = value => {
        value
            ? changeOrder({...order, [id]: {...order[id], count: order[id].count + value}})
            : changeOrder({...order, [id]: {...order[id], count: 0}})
    }

    return (
        <>
            {!!order[id].count &&
            <div className={'orderItem'}>
                <img src={`img/${order[id].img}`} alt={''}/>
                <h2>{order[id].title}</h2>
                <p>{new Intl.NumberFormat().format(order[id].price * order[id].count)}$</p>
                <p>{order[id].count}</p>
                <div>
                    <FaArrowAltCircleUp
                        onClick={() => change(1)}
                        className={'order-icons'}/>
                    <FaArrowAltCircleDown
                        onClick={() => change(-1)}
                        className={'order-icons'}/>
                    <FaTrash
                        onClick={() => change(0)}
                        className={'order-icons'}/>
                </div>
            </div>
            }
        </>
    );
}
