import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Field from './Field';
import { changeTableInfo } from '../actions/info';


const Title = ({ id }) => (
	<div className='title'>
		{ id }
	</div>
)

class Table extends React.Component{
	constructor({ node, index, onTableRendered, tableInfo }){
		super();
		this.isInit = false;
		this.node = node;
		this.index = index;
		this.tableInfo = tableInfo;
		this.onTableRendered = onTableRendered;
		this.setTableInfo = this.setTableInfo.bind(this);
	}
	setTableInfo(div){
		if ( !this.isInit ){
			this.isInit = true;
			const computedDiv = getComputedStyle(div),
				width = parseInt(computedDiv.width),
				height = parseInt(computedDiv.height);
			this.onTableRendered({ width, height });
		}
	}
	render(){
		const { node, index, setTableInfo, tableInfo } = this;
		const	{ width, height, space } = tableInfo;
		const style = {
			left : index * space,
			top : 0
		};
		return(
			<div className='table' style={style} ref={setTableInfo}>
				<Title id={node.id} />
				{ node.fields.map((field, index) => <Field key={index} name={field.name} id={node.id}></Field> )}
			</div>
		)
	}
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
		onTableRendered : ({width, height}) => {
			dispatch(changeTableInfo({ width, height }));
		}
	}
}

Table = connect(
	mapStateToProps,
	mapDispatchToProps
)(Table)

export default Table;