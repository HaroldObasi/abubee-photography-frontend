import React, { useState } from "react";
import { useHistory } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import AdminHome from "./screens/Home/AdminHome";
import Menu from "./components/Header/Menu";
import AdminMenu from "./components/Header/AdminMenu";
import MobileMenu from "./components/MobileHeader/MobileMenu";
import AdminMobileMenu from "./components/MobileHeader/AdminMobileMenu";
import Hire from "./screens/Hire";
import About from "./screens/About";
import CreatePhoto from "./screens/CreatePhoto";
import Admin from "./screens/Admin";
import Signin from "./screens/Signin";
import Signout from "./screens/Signout";
import Messages from "./screens/Messages";
import Footer from "./components/Footer";

import { useSelector } from "react-redux";

function App() {
	const token =
		useSelector((state) => state.admin.token) ||
		localStorage.getItem("auth-token");

	const [windowwidth, setWindowWidth] = useState(window.innerWidth);
	window.addEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});

	const prefMenu = () => {
		if (windowwidth > 972) {
			if (token) {
				return <AdminMenu />;
			} else {
				return <Menu />;
			}
		} else {
			if (token) {
				return <AdminMobileMenu />;
			} else {
				return <MobileMenu />;
			}
		}
	};

	return (
		<>
			<BrowserRouter>
				{prefMenu()}
				<Route path="/" exact component={token ? AdminHome : Home} />
				<Route path="/hire" component={Hire} />
				<Route path="/about" component={About} />
				<Route path="/admin" exact component={Admin} />
				<Route path="/admin/createphoto" component={CreatePhoto} />
				<Route path="/admin/messages" component={Messages} />
				<Route path="/signin" component={Signin} />
				<Route path="/signout" component={Signout} />
				{/* {token ? null : <Footer />} */}
			</BrowserRouter>
		</>
	);
}

export default App;
