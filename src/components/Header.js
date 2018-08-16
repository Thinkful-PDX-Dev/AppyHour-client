import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<Link to='/'>
					<img src={logo} className="App-logo" alt="logo" />
				</Link>
				<h1 className="App-title">Welcome to AppyHour</h1>
				<ul>
					<li>
						<Link to='/detail'>Details Page</Link>
					</li>
					<li>
						<Link to='/list'>List View</Link>
					</li>
					<li>
						<Link to='/contributors'>Contributors</Link>
					</li>
				</ul>

			</header>
		);
	}
}

export default Header;