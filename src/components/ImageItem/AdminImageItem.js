import React, { useState, useRef } from "react";
import { DateTime } from "luxon";
import { imgUrlTransform } from "../../helpers";
import { Spinner } from "react-bootstrap";
import { updatePhoto, deletePhoto } from "../../apiCalls";
import { useDispatch } from "react-redux";
import { getAllPhotos } from "../../store/actions";

const AdminImageItem = ({ id, title, camera, location, shotDate, url }) => {
	const dateTransform = (dateString) => {
		return DateTime.fromISO(dateString).toFormat("MMMM dd, yyyy");
	};
	const newUrl = imgUrlTransform(305, 298, "upload", url);
	const newDate = dateTransform(shotDate);

	const [toEdit, setToEdit] = useState(false);
	const [loading, setLoading] = useState(false);
	const [newData, setNewData] = useState({
		title: title,
		shotDate: shotDate,
		cameraInfo: camera,
		shotLocation: location,
	});
	const dispatch = useDispatch();

	const handleInputChange = (event) => {
		event.preventDefault();
		setNewData({
			...newData,
			[event.target.name]: event.target.value,
		});
	};

	const handleEdit = (e) => {
		e.preventDefault();
		setToEdit(true);
	};

	const handleSave = (e) => {
		e.preventDefault();
		setLoading(true);

		updatePhoto(newData, id).then(() => {
			setLoading(false);
			dispatch(getAllPhotos());
			setToEdit(false);
		});
	};

	const handleDelete = (e) => {
		e.preventDefault();
		setLoading(true);
		deletePhoto(id).then(() => {
			setLoading(false);
			dispatch(getAllPhotos());
		});
	};

	if (!toEdit) {
		return (
			<>
				<div className="photo-item">
					<div className="photo-title">{title}</div>
					<div className="photo-camera">{camera}</div>
					<img src={newUrl} alt="Sample title" className="item-img" />
					<div className="photo-det2 pt-3">{location}</div>
					<div className="photo-det2">{newDate}</div>

					<div className="button-row mt-3">
						<button
							className="btn1"
							style={{ backgroundColor: "#C1A55D" }}
							onClick={handleEdit}
						>
							<b>Edit Photo</b>
						</button>
						{loading ? (
							<Spinner
								className="saveSpin"
								animation="border"
								role="status"
								size="sm"
							/>
						) : null}
						<button
							className="btn1"
							style={{ backgroundColor: "#C3361A" }}
							onClick={handleDelete}
						>
							<b>Delete Photo</b>
						</button>
					</div>
				</div>
			</>
		);
	} else if (toEdit) {
		return (
			<>
				<div className="photo-item">
					<div className="photo-title">
						Title:{" "}
						<input
							type="text"
							name="title"
							value={newData.title}
							placeholder={title}
							onChange={handleInputChange}
							className="edit-input"
						/>
					</div>
					<div className="photo-camera mb-1">
						Camera:{" "}
						<input
							type="text"
							name="cameraInfo"
							value={newData.cameraInfo}
							placeholder={camera}
							onChange={handleInputChange}
							className="edit-input"
						/>
					</div>
					<img src={newUrl} alt="Sample title" className="item-img" />
					<div className="photo-det2 pt-3">
						Location:{" "}
						<input
							type="text"
							name="shotLocation"
							value={newData.shotLocation}
							placeholder={location}
							onChange={handleInputChange}
							className="edit-input"
						/>
					</div>
					<div className="photo-det2">
						Shot date:{" "}
						<input
							type="date"
							name="shotDate"
							value={newData.shotDate}
							placeholder={shotDate}
							onChange={handleInputChange}
							className="edit-input"
						/>
						{/* {newDate} */}
					</div>
					<div className="button-row mt-3">
						<button
							className="btn1"
							style={{ backgroundColor: "#71C15D" }}
							onClick={handleSave}
						>
							{loading ? <b>Saving...</b> : <b>Save Changes</b>}
						</button>

						{loading ? (
							<Spinner
								className="saveSpin"
								animation="border"
								role="status"
								size="sm"
							/>
						) : null}

						<button className="btn1" style={{ backgroundColor: "#C3361A" }}>
							<b>Delete Photo</b>
						</button>
					</div>
				</div>
			</>
		);
	}
};

export default AdminImageItem;
