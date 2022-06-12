import React from "react";
import {Order} from "./Order";

export const ShowOrder = ({order, changeOrder}) => {
    const total = Object.keys(order).reduce((acc, el)=> acc + order[el].count * order[el].price, 0)
    return (
        <div className="cartOpen">
            {Object.keys(order).map(el =>
                <Order
                    changeOrder={changeOrder}
                    key={el}
                    id={el}
                    order={order}
                />
            )}
            <div>
                {`Total price: ${new Intl.NumberFormat().format(total)}$`}
            </div>
        </div>
    );
}
