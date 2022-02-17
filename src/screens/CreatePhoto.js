import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const dburl =
	"http://localhost:5000" || "https://abubee-photography-api.herokuapp.com";

const CreatePhoto = () => {
	const [loading, setLoading] = useState(false);
	const [imageUploaded, setImageUploaded] = useState({});
	const [previewSource, setPreviewSource] = useState();

	const [fullForm, setFullForm] = useState({
		title: "",
		description: "",
		shotDate: "",
		cameraInfo: "",
		shotLocation: "",
	});

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		preview(file);
	};

	const preview = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	const handleSubmitFile = (e) => {
		e.preventDefault();
		setLoading(true);

		if (!previewSource) return;
		uploadImage(previewSource);
	};

	const handleInputChange = (event) => {
		event.preventDefault();
		setFullForm({
			...fullForm,
			[event.target.name]: event.target.value,
		});
	};

	const uploadImage = async (base64encodedImage) => {
		const photo = {
			title: fullForm.title,
			description: fullForm.description,
			shotDate: new Date(fullForm.shotDate),
			cameraInfo: fullForm.cameraInfo,
			shotLocation: fullForm.shotLocation,
			img: base64encodedImage,
		};

		try {
			const response = await axios.post(`${dburl}/admin/createPhoto`, photo);
			setLoading(false);
			setImageUploaded(response.data);
		} catch (err) {
			return err;
		}
	};

	return (
		<>
			{imageUploaded && imageUploaded.title ? (
				<UploadSuccess image={imageUploaded} setImage={setImageUploaded} />
			) : (
				<>
					<div className="hire-title text-center">CREATE PHOTO</div>
					<div className="hire-body create-photo-main">
						<form action="" onSubmit={handleSubmitFile} name="form_name">
							<div className="signup-fields">
								<div className="field">
									<div className="for-label">
										<label htmlFor="emailInput">TITLE</label>
									</div>
									<div className="field-input">
										<input
											name="title"
											type="text"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<br />
								<div className="field">
									<div className="for-label">
										<label htmlFor="emailInput">DESCRIPTION</label>
									</div>
									<div className="field-input">
										<input
											name="description"
											type="text"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<br />
								<div className="field">
									<div className="for-label">
										<label htmlFor="emailInput">SHOT DATE</label>
									</div>
									<div className="field-input">
										<input
											name="shotDate"
											type="date"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<br />
								<div className="field">
									<div className="for-label">
										<label htmlFor="emailInput">CAMERA INFO</label>
									</div>
									<div className="field-input">
										<input
											name="cameraInfo"
											type="text"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<br />
								<div className="field">
									<div className="for-label">
										<label htmlFor="emailInput">SHOT LOCATION</label>
									</div>
									<div className="field-input">
										<input
											name="shotLocation"
											type="text"
											onChange={handleInputChange}
										/>
									</div>
								</div>
								<br />
								<div className="field">
									<input name="img" type="file" onChange={handleFileChange} />
								</div>
							</div>

							<button className="signup-btn mt-4" type="submit">
								upload.
								{loading && (
									<Spinner animation="border" role="status" size="sm" />
								)}
							</button>
						</form>

						{previewSource && (
							<div>
								<h3>Preview</h3>
								<img
									src={previewSource}
									alt="chosenfile"
									style={{ height: "300px" }}
								/>
							</div>
						)}
					</div>
				</>
			)}
		</>
	);
};

const UploadSuccess = (props) => (
	<>
		<div className="d-flex justify-content-center allign-content-center success-msg">
			Image "{props.image.title}", Successfully Uploaded
		</div>
		<div className="d-flex justify-content-center">
			<button
				className="signup-btn mt-4 "
				onClick={() => {
					props.setImage({});
				}}
			>
				{"<<"}prev page.
			</button>
		</div>
	</>
);

export default CreatePhoto;
