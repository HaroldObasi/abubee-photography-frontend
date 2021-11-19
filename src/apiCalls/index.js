import axios from "axios";
const dburl = 'https://abubee-photography-api.herokuapp.com' || "http://localhost:5000"

export const fetchPhotos = async() => {

    try{
        const response = await axios.get(`${dburl}/photos`);
        const photos = response.data
        console.log('photos: ', photos)
        return photos
    }catch(err){
        return err
    }

}

export const signInUser = async(user) => {
    try{
        const response = await axios.post(`${dburl}/admin/signin`, user)
        const userToken = response.data.token

        localStorage.setItem('auth-token', userToken)

        return response.data

    }catch(err){
        return err
    }
}

export const updatePhoto = async(obj, photoId) => {
    try{
        const response = await axios.patch(`${dburl}/admin/editPhoto/${photoId}`, obj)
        console.log("edit response: ", response.data)
        return response.data
    }
    catch(err){
        return err
    }
}