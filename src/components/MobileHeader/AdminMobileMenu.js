import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger";

const AdminMobileMenu = () => {
	const toggleSlide = () => {
		document.getElementById("exit").style.display = "block";
		document.getElementById("sideBar").classList.toggle("slideRight");
	};

	const removeSelf = () => {
		document.getElementById("exit").style.display = "none";
		document.getElementById("sideBar").classList.remove("slideRight");
	};

	return (
		<>
			<div onClick={removeSelf} id="exit" className="see-through" />
			<div id="sideBar" className="side-bar">
				<div className="side-options">
					<ul>
						<li>
							<span className="side-icons">
								<i class="fas fa-home"></i>
							</span>
							<Link to="/admin/messages">messages</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="mobile-menu py-1">
				<a href="/">
					<div className="main-logo">
						<div className="logo-top">Admin</div>
						<div className="text">ABUBEE.COM ADMIN PANEL</div>
					</div>
				</a>

				<div onClick={toggleSlide} className="hamburger">
					<Hamburger />
				</div>
			</div>
		</>
	);
};

export default AdminMobileMenu;
