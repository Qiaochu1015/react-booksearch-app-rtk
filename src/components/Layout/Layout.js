import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
		</>
	);
}

export default Layout;
