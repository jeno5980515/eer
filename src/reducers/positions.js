/*
	{
		table : {
			field : {
				x :
				y 
			}
		}
	}

*/
const positions = (state = {}, action) => {
	switch(action.type){
		case 'CHANGE_POSITION':
			const { table, field, x, y } = action;
			const newTable = {
				...state[table],
				[field] : {
					x,
					y
				}
			};
			return {
				...state,
				[table] : newTable
			}
		default:
			return state;
	}
}

export default positions;