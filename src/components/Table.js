import React from 'react';
import '../App.css';

const Title = ({ id }) => (
	<div className='title'>
		{ id }
	</div>
)

const Field = ({ name }) => (
	<div className='field'>
		{ name }
	</div>
)

const Table = ({ node }) => (
	<div className='table'>
		<Title id={node.id} />
		{ node.fields.map((field, index) => <Field key={index} name={field.name}></Field> )}
	</div>
)

export default Table;