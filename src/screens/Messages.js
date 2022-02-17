import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages } from "../store/actions";
import MsgItem from "../components/MsgItem";

const Messages = () => {
	const messages = useSelector((state) => state.messages.messages);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllMessages());
	}, [dispatch]);
	return (
		<>
			<div className="message-title">INBOX</div>
			{messages ? (
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
			)}
		</>
	);
};

export default Messages;
