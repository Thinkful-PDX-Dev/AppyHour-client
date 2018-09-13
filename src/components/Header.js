import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<Link to='/'>
					<img src={logo} className="App-logo" alt="Appy Hour" />
					<h1>Appy Hour</h1>
				</Link>
				<nav className="appy-nav">
					<ul>
						<li>
							<Link to='/detail'>Neighborhood &#x25BF;</Link>
						</li>
						<li>
							<Link to='/contributors'>Search</Link> <input type="text"/> <button>Go</button>
						</li>
					</ul>
				</nav>

			</header>
		);
	}
}

export default Header;