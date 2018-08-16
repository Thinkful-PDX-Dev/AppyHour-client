import React, { Component } from 'react';
import logo from './logo.svg';
import Detail from './components/detail/detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
	render() {
	  return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to AppyHour</h1>
				</header>
				<main>
					<Route exact path="/" component={Detail} />
				</main>
				<footer>
					<p>Footery things</p>
				</footer>
			</div>
		</Router>
	)}
};

export default App;
