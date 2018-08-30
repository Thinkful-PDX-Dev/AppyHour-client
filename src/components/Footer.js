import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

class Footer extends Component {
	render() {
		return (

			<footer>
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
			</footer>

		);
	}
}


export default Footer;