import React from 'react';
import {Good} from "./Good";

export const Goods = ({goods, onAdd, order}) => (
    <main>
        {Object.keys(goods).map(key =>
            <Good
                key={key}
                name={key}
                good={goods[key]}
                order={order}
                onAdd={onAdd}/>
        )}
    </main>
);
