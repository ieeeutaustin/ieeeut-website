"use client";

import GridContainer from "@/components/GridContainer";
import "./Navbar.scss";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [clientWindowHeight, setClientWindowHeight] = useState(0);

	const handleScroll = () => {
		setClientWindowHeight(window.scrollY);
		console.log(clientWindowHeight);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		console.log(clientWindowHeight);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div className="navbar-container">
			<div className="navbar-shadow-box" />

			<div
				className="navbar-background"
				style={{ opacity: Math.min(100, clientWindowHeight) / 100 }}
			/>
			<GridContainer className="navbar">
				<div className="navbar-content">
					<a className="navbar-logo" href="#">
						<img src="./ieee-logo-white.png" alt="" />
					</a>
					<ul className="navbar-links">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Corporate</a>
						</li>
						<li>
							<a href="#">Merch</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
						<li>
							<a href="#">Join</a>
						</li>
					</ul>
				</div>
			</GridContainer>
		</div>
	);
}
