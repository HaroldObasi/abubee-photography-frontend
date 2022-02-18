import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { signout } from "../../helpers";

const AdminMenu = () => {
	return (
		<>
			<div className="menu py-4 px-5 ">
				<Link to="/">
					<div className="main-logo">
						<div className="logo-top">Admin</div>
						<div className="text">ABUBEE.COM ADMIN PANEL</div>
					</div>
				</Link>

				<div className="menu-options">
					<Link to="/admin/messages">messages</Link>
					<div className="link" onClick={signout}>
						sign-out
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminMenu;
