import React, {Component} from 'react';
import FortuneWidget from './FortuneWidget';
import TranslationsWidget from './TranslationsWidget';
import './HomePage.css';
import StockWidget from "./StockWidget";


class HomeWrapper  extends Component {

    render() {
        return <div>
            <FortuneWidget />
            <TranslationsWidget />
            <StockWidget />
        </div>;
    }
}

export default HomeWrapper;
