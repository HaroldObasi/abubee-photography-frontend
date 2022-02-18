import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
const Menu = () => {
	return (
		<>
			<div className="menu py-4 px-5 ">
				<Link to="/">
					<Logo />
				</Link>

				<div className="menu-options">
					<Link className="text-hover-1" to="/hire">
						Hire
					</Link>
					<Link className="text-hover-1" to="/about">
						About
					</Link>
					<Link className="text-hover-1" to="/signin">
						Sign-in
					</Link>
				</div>
			</div>
		</>
	);
};
export default Menu;
