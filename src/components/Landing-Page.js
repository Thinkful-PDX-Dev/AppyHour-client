import React, { Component } from 'react';
import { MOCK_DETAIL_DATA } from './MOCK_DATA';


class LandingPage extends Component {
	render() {
		const loc = MOCK_DETAIL_DATA;
		return (
			<div>
				<p className="welcome">Welcome one, welcome all to the premiere Portland Happy Hour App</p>
				
				<section className="listing">
					<div className="bar-wide-photo"><img src={loc.imageLg} 
						alt={'Image of ' + loc.name}
						title={'Image of ' + loc.name} /></div>
					<div className="bar-content">
						<span className="rating">
						{loc.rating}
						<img className="star" src={require("../assets/colored-star.svg")}/>
						<img className="star" src={require("../assets/colored-star.svg")}/>
						<img className="star" src={require("../assets/colored-star.svg")}/>
						<img className="star" src={require("../assets/colored-star.svg")}/>
						<img className="star" src={require("../assets/colorless-star.svg")}/>
						</span>
						<span className="bar-name"><strong>A Good Bar</strong></span>
						<span className="address">Address: 666 Sesame Street, Portland OR 97217</span>
						<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, ligula quis tristique fringilla, sapien est sodales velit, ut consequat sapien nulla a risus. Proin lacinia ultrices sodales. Phasellus eleifend mauris a est accumsan condimentum. Etiam gravida, nibh quis laoreet efficitur, est augue bibendum tellus, sed auctor justo neque vel est. Fusce et lacus a leo scelerisque ultricies ut sed justo. Pellentesque semper mauris eget semper faucibus.</p>
					</div>
				</section>
			</div>
		);
	}
}

export default LandingPage;