import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<>
			<div className="menu py-4 px-5 ">
				<Link to="/">
					<div className="main-logo">
						<div className="logo-top">Abubakar Ali</div>
						<div className="text">
							PHOTOGRAPHER <span className="ampersand">&</span> CREATIVE
							DIRECTOR
						</div>
					</div>
				</Link>

				<div className="menu-options">
					<Link className="text-hover-1" to="/">
						works
					</Link>
					<Link className="text-hover-1" to="/hire">
						hire
					</Link>
					<Link className="text-hover-1" to="/about">
						about
					</Link>
				</div>
			</div>
		</>
	);
};
export default Menu;
