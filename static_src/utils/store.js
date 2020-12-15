import { createStore } from 'redux';
import initReducers from './../reducers';

export default function initStore() {
	const innitialStore = {};

	return createStore(
		initReducers,
		innitialStore,
	);
}