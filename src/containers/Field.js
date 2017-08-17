import React from 'react';
import { connect } from 'react-redux';
import { changePosition } from '../actions/positions';

class Field extends React.Component{
	constructor({ name, onFieldRendered, id }){
		super();
		this.id = id;
		this.name = name;
		this.setFieldPoistion = this.setFieldPoistion.bind(this);
		this.onFieldRendered = onFieldRendered;
	}
	setFieldPoistion({ div, table, field }){
		const computedDiv = div.getBoundingClientRect(),
			x = computedDiv.left,
			y = computedDiv.top;
		this.onFieldRendered({ x, y, table, field })
	}
	render(){
		const { name, setFieldPoistion, id } = this;
		return (
			<div ref={(div) => setFieldPoistion({ div, table : id, field : name })} className='field'>
				{ name }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFieldRendered : ({ table, field, x, y }) => {
			dispatch(changePosition({ table, field, x, y }))
		} 
	}
}

Field = connect(
	mapStateToProps,
	mapDispatchToProps
)(Field)

export default Field;