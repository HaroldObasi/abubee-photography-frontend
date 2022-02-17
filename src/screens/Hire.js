import React, { useState } from "react";
import { sendMessage } from "../apiCalls";
import axios from "axios";

const dburl =
	"http://localhost:5000" || "https://abubee-photography-api.herokuapp.com";

const Hire = () => {
	const [message, setMessage] = useState({
		name: "",
		email: "",
		num: "",
		body: "",
	});
	const [msgStatus, setMsgStatus] = useState(false);

	const handleInputChange = (e) => {
		const [name, value] = e.target;
		e.preventDefault();
		setMessage({
			...message,
			[name]: value,
		});
	};

	const handleSend = async (e) => {
		e.preventDefault();
		// let response = await sendMessage(message).then(() => {
		// 	setMsgStatus(true);
		// });

		try {
			const response = await axios.post(
				`${dburl}/messages/sendmessage`,
				message
			);
			setMsgStatus(true);
			console.log(response.data);
		} catch (err) {
			return err;
		}
	};

	return (
		<div className="hire-main">
			<div className="hire-body">
				<div className="hire-title">Contact</div>

				<form action="" onSubmit={handleSend}>
					<div className="signup-fields">
						<div className="field">
							<div className="for-label">
								<label htmlFor="emailInput">NAME</label>
							</div>
							<div className="field-input">
								<input type="text" name="name" onChange={handleInputChange} />
							</div>
						</div>
						<br />
						<div className="field">
							<div className="for-label">
								<label htmlFor="emailInput">EMAIL</label>
							</div>
							<div className="field-input">
								<input type="text" name="email" onChange={handleInputChange} />
							</div>
						</div>
						<br />
						<div className="field">
							<div className="for-label">
								<label htmlFor="emailInput">PHONE NUMBER</label>
							</div>
							<div className="field-input">
								<input type="text" name="num" onChange={handleInputChange} />
							</div>
						</div>
						<br />
						<div className="field">
							<div className="for-label">
								<label htmlFor="emailInput">MESSAGE</label>
							</div>
							<div className="field-input">
								<input
									style={{
										height: "100px",
										resize: "none",
										boxSizing: "border-box",
									}}
									name="body"
									type="text"
									onChange={handleInputChange}
								/>
							</div>
						</div>
					</div>
					{!msgStatus ? (
						<button className="signup-btn mt-4" type="submit">
							submit.
						</button>
					) : (
						<div className="confirm">Message Sent!</div>
					)}
				</form>
				{/* {msgStatus ? <div className="confirm">Message Sent!</div> : null} */}
			</div>
		</div>
	);
};

export default Hire;
