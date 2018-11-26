import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './components/App';

render(
	<Router>
		<Switch>
			<App />
		</Switch>
	</Router>,
	document.getElementById('app')
);
