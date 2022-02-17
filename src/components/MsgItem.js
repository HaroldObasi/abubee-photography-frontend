import React from "react";

const MsgItem = (props) => {
	return (
		<>
			<div className="msgItem">
				<div className="msgItem-sender">{props.senderName}</div>
				<div className="msgItem-body">
					<div>{props.body}</div>
				</div>
			</div>
		</>
	);
};

export default MsgItem;
