export function photosReducer(state={},action){
    switch(action.type){
        case 'GET_PHOTOS':
            return {...action.payload}
        case 'EDIT_PHOTOS':
            return {toEdit: action.payload}
        default:
            return state
    }
}