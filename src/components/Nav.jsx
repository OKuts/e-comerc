import React from 'react';
import {nav} from "../config/data";

export const Nav = () => (
    <nav>
        {nav.map(item => <div key={item}>{item}</div>)}
    </nav>

);
