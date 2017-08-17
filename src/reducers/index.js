import { combineReducers } from 'redux';
import data from './data';
import positions from './positions';

const reducers = combineReducers({ 
	data,
	positions
});

export default reducers;