export default function(state = [], action) {
	switch(action.type) {
		case 'CREATE_COMMENT':
			return [...state,
				Object.assign({}, action.comment)];
		default:
			return state;
	}
};