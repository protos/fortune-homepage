import React, {Component} from 'react';
import FortuneWidget from './FortuneWidget';
import TranslationsWidget from './TranslationsWidget';
import './HomePage.css';


class HomeWrapper  extends Component {

    render() {
        return <div>
            <FortuneWidget />
            <TranslationsWidget />
        </div>;

        return <div>Loading...</div>;
    }
}

export default HomeWrapper;
