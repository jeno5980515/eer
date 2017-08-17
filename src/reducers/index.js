import { combineReducers } from 'redux';
import data from './data';
import positions from './positions';
import info from './info';

const reducers = combineReducers({ 
	data,
	positions,
	info
});

export default reducers;