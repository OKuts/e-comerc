import React from "react";
import {Order} from "./Order";

export const ShowOrder = ({order, changeOrder}) => {
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
        </div>
    );
}
