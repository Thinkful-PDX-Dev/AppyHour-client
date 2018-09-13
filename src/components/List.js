import React, { Component } from 'react';

class List extends Component {
	render() {
		return (
			<div>
				<section className="listing">
					<div className="bar-wide-photo"><img src="https://picsum.photos/800/250"/></div>
					<div className="bar-content">
						<span className="rating">
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

export default List;		