import React, { Component } from 'react';
import Header from './components/Header';
import LandingPage from './components/Landing-Page';
import Detail from './components/Detail';
import Contributors from './components/Contributors';
import List from './components/List';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
	render() {
	  return (
		<Router>
			<div className="App">
				<Header />
				<main>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/detail" component={Detail} />
					<Route exact path="/list" component={List} />
					<Route exact path="/contributors" component={Contributors} />
				</main>
				<footer>
					<p>Footery things</p>
				</footer>
			</div>
		</Router>
	)}
};

export default App;
