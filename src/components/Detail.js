import React, { Component } from 'react';
import { MOCK_DETAIL_DATA } from './MOCK_DATA';

export default class Detail extends Component {
	render() {
		const loc = MOCK_DETAIL_DATA;
		return (
			<div>
				<div className="row page-nav">
					<div className="col-6 text-left"><i className="fas fa-arrow-alt-circle-left fa-3x"></i></div>
					<div className="col-6 text-right"><i className="fas fa-arrow-alt-circle-right fa-3x"></i></div>
				</div>
				<section className="listing">
					<img src={loc.imageLg} 
						alt={'Image of ' + loc.name}
						title={'Image of ' + loc.name} />
					<div className="bar-content">
					<h2 className="bar-name">{loc.name}</h2><span className="rating">
						{loc.rating}
						<img className="star" src={require("../assets/colored-star.svg")}/>
						<img className="star" src={require("../assets/colored-star.svg")}/>
						<img className="star" src={require("../assets/colored-star.svg")}/>
						<img className="star" src={require("../assets/colored-star.svg")}/>
						<img className="star" src={require("../assets/colorless-star.svg")}/>
						</span>
						<p>{loc.description}</p>
						
						<div className="details">
							<div><img src={loc.map} /></div>
							<div>
								<h3>Neighborhood: {loc.neighborhood}</h3>
								<ul>
									<li><strong>Location</strong>: {loc.address}</li>
									<li><strong>Phone</strong>: {loc.phone}</li>
									<li><strong>Hours</strong>: {loc.hours}</li>
								</ul>  
								
								<h3>Website/Social</h3>
								<ul>
									<li><strong>Website</strong>: {loc.links.website}</li>
									<li><strong>Instagram</strong>: {loc.links.instagram}</li>
									<li><strong>Facebook</strong>: {loc.facebook}</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}	
}