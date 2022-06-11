import './App.scss';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {goods} from './config/data';
import {Goods} from './components/Goods';
import {useState} from "react";

function App() {
    const [order, setOrder] = useState({})

    return (
        <div className={'wrapper'}>
            <Header order={order} changeOrder={setOrder}>Hello</Header>
            <Goods goods={goods} order={order} onAdd={setOrder}/>
            <Footer>Footer</Footer>
        </div>

    );
}

export default App;
