import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailComponent from './DetailComponent';
import { MOCK_DETAIL_DATA } from './MOCK_DATA';

class DetailContainer extends Component {
	render() {
		const { barId } = this.props.match.params;
		const bar = MOCK_DETAIL_DATA;
		return (
			<div>
				<DetailComponent 
					bar={bar}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {

	};
}

export default connect(mapStateToProps)(DetailContainer);