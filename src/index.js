import React from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';*/
import App from './App';
import BadgeNew from './components/pages/BadgeNew.js';
import Badges from './components/pages/Badges.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Badges />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
