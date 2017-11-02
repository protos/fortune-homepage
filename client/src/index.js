import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FortuneData from './FortuneData';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FortuneData />,
    document.getElementById('root'));

registerServiceWorker();
