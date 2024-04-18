import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (

		<nav className="navbar navbar-expand-lg bg-body-tertiary purple ">
			<div className="container-fluid">
				<a className="navbar-brand" href="#"><img src={logo} height="45px" /></a>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active text-light" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active text-light" to="/signup">Sign Up</Link>
						</li>
						<li className="nav-item nav-link active text-light">
							{!store.token ?
								<Link to="/login" className="text-light">Login</Link>
								:
								<Link to="/" className="text-light" onClick={() => actions.logout()}>Log Out</Link>

							}
						</li>
					</ul>

				</div>
			</div>
		</nav>

	);
};
