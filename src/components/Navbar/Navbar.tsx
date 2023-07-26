"use client";

import Image from "next/image";
import Link from "next/link";
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
							<Link href="/">
								<img src="./ieee-logo-white.png" alt="" />
							</Link>
						</li>
						<ul
							className={`navbar-links ${opened ? "opened" : ""}`}
						>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/events">Events</Link>
							</li>
							<li className="navbar-dropitem">
								<Link href="/students">
									Students
									<Image
										src="/icons/arrow.svg"
										alt=""
										width={15}
										height={15}
									/>
								</Link>
								<ul className="navbar-dropdown">
									<li>
										<Link href="/merch">Merch</Link>
									</li>
									<li>
										<Link href="/officers">Officers</Link>
									</li>
									<li>
										<Link href="/membership">
											Membership
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/corporate">Corporate</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li className="navbar-outlined">
								<Link href="/join">Join</Link>
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
