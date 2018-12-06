import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeWrapper from './HomeWrapper';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeWrapper />,
    document.getElementById('fortune'));

registerServiceWorker();
