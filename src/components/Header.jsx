import React, {useState} from 'react';
import {Nav} from "./Nav";
import {FaCartArrowDown} from "react-icons/fa";
import {ShowOrder} from "./ShowOrder";

export const Header = ({order, changeOrder}) => {
    const [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <div className={'header'}>
                <div className="logo">House Staff</div>
                <FaCartArrowDown
                    onClick={() => setCartOpen(!cartOpen)}
                    className={`cart${cartOpen ? ' active' : ''}`}/>
                <Nav/>
                {cartOpen && <ShowOrder order={order} changeOrder={changeOrder}/>}
            </div>
            <div className="presentation">
            </div>
        </header>
    )
};
