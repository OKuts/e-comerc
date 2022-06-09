import './App.scss';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {useState} from 'react';
import {goods} from './config/data';
import {Goods} from './components/Goods';

function App() {
    const [goodsArr, setGoodsArr] = useState(goods)
    return (
        <div className={'wrapper'}>
            <Header>Hello</Header>
            <Goods goods={goodsArr}/>
            <Footer>Footer</Footer>
        </div>

    );
}

export default App;
