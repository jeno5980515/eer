const changeTableInfo = ({ width, height}) => {
	return {
		type : 'CHANGE_TABLE_INFO',
		width,
		height
	}
}

export {
	changeTableInfo
}