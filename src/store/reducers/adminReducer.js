export function adminReducer(state={token: localStorage.getItem("auth-token") || false},action){
    switch(action.type){
        case 'SIGN_IN':
            // return {userToken: localStorage.getItem('auth-token'), message: action.payload.messsage}
            return action.payload
        default:
            return state
    }
}