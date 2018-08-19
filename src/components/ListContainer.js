import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListComponent } from "./ListComponent";
import { fetchAllBars } from '../actions';

class ListContainer extends Component {
	componentDidMount() {
		this.props.dispatch(fetchAllBars());
	}
	render() {
		const { barList } = this.props;
		return (
			<div>
				<ListComponent 
					barList={barlist}
				/>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		barlist: state.bars.list
	};
}

export default connect(
	mapStateToProps,
)(ListContainer);