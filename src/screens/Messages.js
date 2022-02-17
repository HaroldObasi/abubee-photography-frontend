import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages } from "../store/actions";
import Table from "react-bootstrap/Table";

const Messages = () => {
	const messages = useSelector((state) => state.messages.messages);
	var count = 0;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllMessages());
	}, [dispatch]);
	return (
		<>
			<div className="message-title">INBOX</div>
			<Table
				striped
				bordered
				hover
				variant="dark"
				className="msg-table"
				responsive="xl"
			>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Message</th>
					</tr>
				</thead>
				<tbody>
					{messages ? (
						messages.map((item) => {
							count++;
							return (
								// <MsgItem
								// 	className="border-item"
								// 	body={item.body}
								// 	senderName={item.senderName}
								// 	read={item.read}
								// 	senderNum={item.senderNum}
								// 	senderEmail={item.senderEmail}
								// />
								<tr>
									<td>{count}</td>
									<td>{item.senderName}</td>
									<td>{item.body}</td>
								</tr>
							);
						})
					) : (
						<> </>
					)}
				</tbody>
			</Table>

			{/* {messages ? (
				messages.map((item) => (
					<MsgItem
						className="border-item"
						body={item.body}
						senderName={item.senderName}
						read={item.read}
						senderNum={item.senderNum}
						senderEmail={item.senderEmail}
					/>
				))
			) : (
				<> </>
			)} */}
		</>
	);
};

export default Messages;
