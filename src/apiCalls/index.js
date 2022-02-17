import axios from "axios";
const dburl =
	"http://localhost:5000" || "https://abubee-photography-api.herokuapp.com";

export const fetchPhotos = async () => {
	try {
		const response = await axios.get(`${dburl}/photos`);
		const photos = response.data;
		console.log("photos: ", photos);
		return photos;
	} catch (err) {
		return err;
	}
};

export const signInUser = async (user) => {
	try {
		const response = await axios.post(`${dburl}/admin/signin`, user);
		const userToken = response.data.token;

		localStorage.setItem("auth-token", userToken);

		return response.data;
	} catch (err) {
		return err;
	}
};

export const updatePhoto = async (obj, photoId) => {
	try {
		const response = await axios.patch(
			`${dburl}/admin/editPhoto/${photoId}`,
			obj
		);
		console.log("edit response: ", response.data);
		return response.data;
	} catch (err) {
		return err;
	}
};

export const deletePhoto = async (photoId) => {
	try {
		const response = await axios.delete(
			`${dburl}/admin/deletePhoto/${photoId}`
		);
		console.log("Delete response: ", response.data);
		return response.data;
	} catch (err) {
		return err;
	}
};

export const sendMessage = async (message) => {
	try {
		const response = await axios.post(`${dburl}/messages/sendmessage`, message);
		return response.data;
	} catch (err) {
		return err;
	}
};

export const fetchMessages = async () => {
	try {
		const response = await axios.get(`${dburl}/messages/getMessages`);
		return response.data.result; // extracting main result that endpoint returns
	} catch (err) {
		return err;
	}
};
