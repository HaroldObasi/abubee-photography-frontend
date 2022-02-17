import { combineReducers } from "redux";
import { photosReducer } from "../reducers/photosReducer";
import { adminReducer } from "../reducers/adminReducer";
import { messagesReducer } from "./messageReducer";

const rootReducer = combineReducers({
	photos: photosReducer,
	admin: adminReducer,
	messages: messagesReducer,
});

export default rootReducer;
