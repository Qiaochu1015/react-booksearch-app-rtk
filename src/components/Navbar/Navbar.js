import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<ul>
			<h1>GRACE BOOKS</h1>
			<div className="nav-container">
				<li>
					<NavLink to="/">HOME</NavLink>
				</li>
				<li>
					<NavLink to="/wishlist">WISHLIST</NavLink>
				</li>
			</div>
		</ul>
	);
}

export default Navbar;
