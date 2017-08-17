const changePosition = ({ table, field, x, y }) => {
	return {
		type : 'CHANGE_POSITION',
		table,
		field,
		x,
		y
	}
}

export {
	changePosition
}