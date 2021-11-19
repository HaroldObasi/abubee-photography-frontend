import { combineReducers } from "redux";
import { photosReducer } from "../reducers/photosReducer"
import { adminReducer } from "../reducers/adminReducer";

const rootReducer = combineReducers({
    photos: photosReducer,
    admin: adminReducer
})

export default rootReducer