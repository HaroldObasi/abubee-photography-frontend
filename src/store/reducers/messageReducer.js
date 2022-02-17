export function messagesReducer(state = {}, action) {
	switch (action.type) {
		case "GET_MESSAGES":
			return { ...action.payload };
		default:
			return state;
	}
}
