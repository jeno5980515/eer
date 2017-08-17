import React from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table';

let Data = ({ nodes, links }) => (
	<div>
		{ nodes.map( (node, index) => <Table node={node} key={index} />) }
	</div>
)

const mapStateToProps = (state) => {
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