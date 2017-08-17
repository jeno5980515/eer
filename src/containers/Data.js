import React from 'react';
import { connect } from 'react-redux';

let Data = ({ nodes, links }) => (
	<div>
		{JSON.stringify(nodes)}
		{JSON.stringify(links)}
	</div>
)

const mapStateToProps = (state) => {
	console.log(state.data);
	return {
		nodes : state.data.nodes,
		links : state.data.links
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

Data = connect(
	mapStateToProps,
	mapDispatchToProps
)(Data)

export default Data;