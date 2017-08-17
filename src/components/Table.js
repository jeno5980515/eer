import React from 'react';

const Table = ({ node }) => (
	<div>
		<div>{node.id}</div>
		{ node.fields.map((field, index) => <div key={index}>{field.name}</div> )}
	</div>
)

export default Table;