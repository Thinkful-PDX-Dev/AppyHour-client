import React, { Component } from 'react';
import { MOCK_DETAIL_DATA } from './mock-data';

export default class Detail extends Component {
	render() {
		const loc = MOCK_DETAIL_DATA;
		return (
			<div>
				<div className="row page-nav">
					<div className="col-6 text-left"><i className="fas fa-arrow-alt-circle-left fa-3x"></i></div>
					<div className="col-6 text-right"><i className="fas fa-arrow-alt-circle-right fa-3x"></i></div>
				</div>
				<div>
					<h2>{loc.name}</h2>
					<img src={loc.image} 
						alt={'Image of ' + loc.name}
						title={'Image of ' + loc.name} />
					<h3>{loc.neighborhood}</h3>
					<ul>
						<li><strong>Location</strong>: {loc.address}</li>
						<li><strong>Phone</strong>: {loc.phone}</li>
						<li><strong>Hours</strong>: {loc.hours}</li>
					</ul>  
					<h3>Description</h3>
					<p>{loc.description}</p>
					<div>
						<h3>Website/Social</h3>
						<ul>
							<li><strong>Website</strong>: {loc.links.website}</li>
							<li><strong>Instagram</strong>: {loc.links.instagram}</li>
							<li><strong>Facebook</strong>: {loc.facebook}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}	
}