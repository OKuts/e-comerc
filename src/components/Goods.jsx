import React from 'react';
import {Good} from "./Good";

export const Goods = ({goods, onAdd, order}) => (
    <main>
        {goods.map(good =>
            <Good key={good.id} good={good} order={order} onAdd={onAdd}/>
        )}
    </main>
);
