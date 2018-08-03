const initialState = {
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
				books: action.payload
			}
		case 'ADD_BOOKS':
		return {
			books: [
				...state,
				...state.books,
				action.payload
			]
		}
		default:
			return state;
	}
}