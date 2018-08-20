import React, { Component } from 'react';

export default class Detail extends Component {
	render() {
		const { bar } = this.props;
		return (
			<div>
				<div className="row page-nav">
					<div className="col-6 text-left"><i className="fas fa-arrow-alt-circle-left fa-3x"></i></div>
					<div className="col-6 text-right"><i className="fas fa-arrow-alt-circle-right fa-3x"></i></div>
				</div>
				<div>
					<h2>{bar.name}</h2>
					<img src={bar.image} 
						alt={'Image of ' + bar.name}
						title={'Image of ' + bar.name} />
					<h3>{bar.neighborhood}</h3>
					<ul>
						<li><strong>Location</strong>: {bar.address}</li>
						<li><strong>Phone</strong>: {bar.phone}</li>
						<li><strong>Hours</strong>: {bar.hours}</li>
					</ul>  
					<h3>Description</h3>
					<p>{bar.description}</p>
					<div>
						<h3>Website/Social</h3>
						<ul>
							<li><strong>Website</strong>: {bar.links.website}</li>
							<li><strong>Instagram</strong>: {bar.links.instagram}</li>
							<li><strong>Facebook</strong>: {bar.facebook}</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}	
}