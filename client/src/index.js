import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FortuneData from './FortuneData';
import StockWidget from './StockWidget';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FortuneData />,
    document.getElementById('fortune'));

// ReactDOM.render(<StockWidget />,
//     document.getElementById('stock-widget'));


registerServiceWorker();
