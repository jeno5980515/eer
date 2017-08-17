import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Link from '../components/Link';

let Data = ({ nodes, links, positions, tableInfo }) => {
	return (
		<div className='data'>
			{ nodes.map( (node, index) => <Table node={node} key={index} index={index} />) }
			{ links.map( (link, index) => {
				const t1 = link[0].table,
					t2 = link[1].table,
					f1 = link[0].field,
					f2 = link[1].field;

				const p1 = positions && positions[t1] && positions[t1][f1],
					p2 = positions && positions[t2] && positions[t2][f2];

				if ( p1 && p2 ){
					let linkData = [p1, p2];
					return (
						<Link tableInfo={tableInfo} linkData={linkData} key={index}/> 
					)
				}
				else {
					return null;
				}
			})}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		nodes : state.data.nodes,
		links : state.data.links,
		positions : state.positions,
		tableInfo : state.info.table
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