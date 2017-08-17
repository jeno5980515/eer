import React from 'react';
import '../App.css';
import Field from '../containers/Field';

const Title = ({ id }) => (
	<div className='title'>
		{ id }
	</div>
)


const Table = ({ node }) => (
	<div className='table'>
		<Title id={node.id} />
		{ node.fields.map((field, index) => <Field key={index} name={field.name} id={node.id}></Field> )}
	</div>
)

export default Table;