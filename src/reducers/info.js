const INIT_STATE = {
	table : {
		width : 100,
		height : 100,
		space : 300		
	}
}


const info = (state = INIT_STATE, action) => {
	switch(action.type){
		case 'CHANGE_TABLE_INFO':
			const { width, height, space } = action;
			const props = { width, height, space };
			let newTable = {...state.table};
			Object.keys(props).forEach((prop) => {
				if ( props[prop] ){
					newTable[prop] = props[prop]
				}
			})
			return {
				...state,
				table : newTable 
			}
		default:
			return state
	}
}

export default info;