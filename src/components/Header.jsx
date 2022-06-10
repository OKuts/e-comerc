import React, {useState} from 'react';
import {Nav} from "./Nav";
import {FaCartArrowDown} from "react-icons/fa";

export const Header = () => {
    const [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <div className={'header'}>
                <div className="logo">House Staff</div>
                <FaCartArrowDown
                    onClick={() => setCartOpen(!cartOpen)}
                    className={`cart${cartOpen ? ' active' : ''}`}/>
                <Nav/>
                {cartOpen && <div className="cartOpen">
                    hello
                </div>}
            </div>
            <div className="presentation">
            </div>
        </header>
    )
};
