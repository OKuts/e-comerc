import './App.scss';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {goods} from './config/data';
import {Goods} from './components/Goods';
import {useEffect, useState} from "react";
import { Categories } from './components/Categories';

function App() {
    const [order, setOrder] = useState({})
    const [showGoods, setShowGoods] = useState(goods)
    const [currentCategory, setCurrentCategory] = useState('All')
    const categories = ['All', ...new Set(Object.keys(goods).map(el => goods[el].category))]

    useEffect(()=>{
        if (currentCategory === 'All') {
            setShowGoods({...goods})
        } else {
            const tempGoods = {};
            Object.keys(goods).forEach(el => {
                if (goods[el].category === currentCategory) tempGoods[el] = {...goods[el]}
            })
            setShowGoods(tempGoods)
        }
    }, [currentCategory])
    
    return (
        <div className={'wrapper'}>
            <Header order={order} changeOrder={setOrder}>Hello</Header>
            <Categories 
                categories={categories} 
                currentCategory={currentCategory} 
                setCurrentCategory={setCurrentCategory}/>
            <Goods goods={showGoods} order={order} onAdd={setOrder}/>
            <Footer>Footer</Footer>
        </div>

    );
}

export default App;
