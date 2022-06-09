import React from 'react';
import {nav} from "../config/data";
import { FaCartArrowDown } from 'react-icons/fa';

export const Nav = () => (
    <nav>
        <FaCartArrowDown className={'cart'}/>
        {nav.map(item => <div key={item}>{item}</div>)}
    </nav>

);
