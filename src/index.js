import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/**
 * Counter
 */
import Counter from './demos/counter/Root'
import configureStore from './demos/counter/store/configureStore'
const store = configureStore()
render(<Counter store={store} />, document.getElementById('root'));


registerServiceWorker();
