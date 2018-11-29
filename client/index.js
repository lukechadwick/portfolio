import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './components/App';

import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

render(
  <React.Fragment>
    {/* <Switch> */}
    <App />
    {/* </Switch> */}
  </React.Fragment>,
  document.getElementById('app')
);
