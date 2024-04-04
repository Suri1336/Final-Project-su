import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (

		<nav className="navbar navbar-expand-lg bg-body-tertiary purple ">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Color Me</a>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active text-light" to="/">Home</Link>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">SignUp</a></li>
								<li><a className="dropdown-item" href="#">Login</a></li>
								<li><hr className="dropdown-divider" />profile</li>
							</ul>
						</li>
						<li className="nav-item">
							{!store.token ?
								<Link to="/login">Login</Link>
								:
								<Link to="/" onClick={() => actions.logout()}>Log Out</Link>

							}
						</li>
					</ul>

				</div>
			</div>
		</nav>

	);
};
