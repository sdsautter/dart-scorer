import React from 'react';
import {render} from 'react-dom';
import Cricket from './components/cricket/Cricket.js';
import X01 from "./components/x01/X01.js";
import Master from "./components/Master.js";
import registerServiceWorker from './registerServiceWorker';

render(<Master />, document.querySelector('#app'));

registerServiceWorker();