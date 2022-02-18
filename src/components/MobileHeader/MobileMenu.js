import React from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger";
import Logo from "../Logo";

const MobileMenu = () => {
	const token =
		useSelector((state) => state.admin.token) ||
		localStorage.getItem("auth-token");

	const toggleSlide = () => {
		document.getElementById("exit").style.display = "block";
		document.getElementById("sideBar").classList.toggle("slideRight");
	};

	const removeSelf = () => {
		document.getElementById("exit").style.display = "none";
		document.getElementById("sideBar").classList.remove("slideRight");
	};

	if (!token) {
		return (
			<>
				<div onClick={removeSelf} id="exit" className="see-through" />
				<div id="sideBar" className="side-bar">
					<div className="side-options">
						<ul>
							<li>
								<span className="side-icons">
									<i class="fa-solid fa-briefcase-blank"></i>
								</span>
								<Link to="/hire">Hire</Link>
							</li>
							<li>
								<span className="side-icons">
									<i class="fa-solid fa-address-card"></i>
								</span>
								<Link to="/about">About</Link>
							</li>
							<li>
								<span className="side-icons">
									<i class="fa-solid fa-user"></i>
								</span>
								<Link to="/signin">Sign-in</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="mobile-menu py-4 px-5">
					<a href="/">
						<Logo />
					</a>

					<div onClick={toggleSlide} className="hamburger">
						<Hamburger />
						{/* <i class="fas fa-bars"></i> */}
					</div>
				</div>
			</>
		);
	}
};

export default MobileMenu;
