import { fetchPhotos, signInUser } from "../../apiCalls"

export const getAllPhotos = async () => {
    return{
        type: "GET_PHOTOS",
        payload: await fetchPhotos()
    }
}

export const signIn = async (user) => {
    return{
        type: 'SIGN_IN',
        payload: await signInUser(user)
    }
}

export const editPhoto = async (id) => {
    return{
        type: 'EDIT_PHOTO',
        payload: id
    }
}