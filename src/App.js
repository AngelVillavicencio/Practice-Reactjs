import React from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation.js';
import Badge from './components/Badge.js';
import BadgeNew from './components/pages/BadgeNew';
import './App.css';
/*
function App() {
	return (
		<div className="App">
			<Navigation title="Hola"/>
      
		</div>
	);
}*/
/*
function App() {
	return (
		<div className="App">
			<Badge
				firstName="Arturx"
				lastName="Villavi"
				avatarUrl=""
				jobtitle="Frontend Developer"
				instagram="@angell.villavicencio"
			/>
		</div>
	);
}*/

function App() {
	return (
		<div>
			<BadgeNew />
		</div>
	);
}
export default App;
