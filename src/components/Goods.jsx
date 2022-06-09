import React from 'react';
import {Good} from "./Good";

export const Goods = ({goods}) => (
    <main>
        {goods.map(good =>
            <Good key={good.id} good={good}/>
        )}
    </main>
);
