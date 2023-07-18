"use client";

import Image from "next/image";
import GridContainer from "@/components/GridContainer/GridContainer";
import "./Navbar.scss";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [clientWindowHeight, setClientWindowHeight] = useState(0);
	const [opened, setOpened] = useState(false);

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
					<ul className="navbar-list">
						<li className="navbar-list-logo">
							<a href="/">
								<img src="./ieee-logo-white.png" alt="" />
							</a>
						</li>
						<ul
							className={`navbar-links ${opened ? "opened" : ""}`}
						>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/events">Events</a>
							</li>
							<li className="navbar-dropitem">
								<a href="/students">
									Students
									<Image
										src="/icons/arrow.svg"
										alt=""
										width={15}
										height={15}
									/>
								</a>
								<ul className="navbar-dropdown">
									<li>
										<a href="/members">Merch</a>
									</li>
									<li>
										<a href="/officers">Officers</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="/corporate">Corporate</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
							<li className="navbar-outlined">
								<a href="/join">Join</a>
							</li>
						</ul>
						<li
							className="navbar-menu-icon"
							onClick={() => {
								console.log(opened);
								setOpened(!opened);
							}}
						>
							<Image
								height={40}
								width={40}
								src="/icons/menu.svg"
								alt=""
							/>
						</li>
					</ul>
				</div>
			</GridContainer>
		</div>
	);
}
