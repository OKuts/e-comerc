import React from 'react';
import {Nav} from "./Nav";

export const Header = () => (
    <header>
        <div className={'header'}>
            <div className="logo">House Staff</div>
            <Nav/>
        </div>
        <div className="presentation">
        </div>
    </header>
);
