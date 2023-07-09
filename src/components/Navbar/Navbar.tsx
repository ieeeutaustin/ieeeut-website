"use client";

import GridContainer from "@/components/GridContainer/GridContainer";
import "./Navbar.scss";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [clientWindowHeight, setClientWindowHeight] = useState(0);

	const handleScroll = () => {
		setClientWindowHeight(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
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
					<a className="navbar-logo" href="/">
						<img src="./ieee-logo-white.png" alt="" />
					</a>
					<ul className="navbar-links">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/contact">Events</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/corporate">Corporate</a>
						</li>
						<li>
							<a href="/students">Students</a>
						</li>
						<li>
							<a href="/merch">Merch</a>
						</li>
						<li>
							<a href="/join">Join</a>
						</li>
					</ul>
				</div>
			</GridContainer>
		</div>
	);
}
