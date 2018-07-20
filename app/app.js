import React from 'react';
import {render} from 'react-dom';
import Master from "./components/Master.js";
import registerServiceWorker from './registerServiceWorker';

render(<Master />, document.querySelector('#app'));
registerServiceWorker();