import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../Reducers';
import thunk from 'redux-thunk';

export default function(initialState) {
	return createStore (
			RootReducer,
			initialState,
			applyMiddleware(thunk)
		);
}