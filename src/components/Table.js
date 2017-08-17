import React from 'react';
import '../App.css';
import Field from '../containers/Field';

const tableWidth = 300;

const Title = ({ id }) => (
	<div className='title'>
		{ id }
	</div>
)


const Table = ({ node, index }) => {
	const style = {
		left : index * tableWidth,
		top : 0
	};
	return(
		<div className='table' style={style}>
			<Title id={node.id} />
			{ node.fields.map((field, index) => <Field key={index} name={field.name} id={node.id}></Field> )}
		</div>
	)
}

export default Table;