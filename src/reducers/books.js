const initialState = {
	isReady: false,
	books: [
		{
			id: 1,
			title: 'Voina i mir',
			author: 'Tolstoy'
		}
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_BOOKS':
			return {
				...state,
				books: action.payload,
				isReady: true
			}
		default:
			return state;
	}
}