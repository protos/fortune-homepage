import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeWrapper from './HomeWrapper';
import StockWidget from './StockWidget';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeWrapper />,
    document.getElementById('fortune'));

registerServiceWorker();
