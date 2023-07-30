"use client";

import "./Navbar.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import GridContainer from "@/components/GridContainer/GridContainer";

export default function Navbar() {
	const [clientWindowHeight, setClientWindowHeight] = useState(0);
	const [opened, setOpened] = useState(false);

	const handleScroll = () => {
		setClientWindowHeight(window.scrollY);
	};

	useEffect(() => {
		setClientWindowHeight(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="navbar-container">
			<div
				className="navbar-background"
				style={{ opacity: Math.min(100, clientWindowHeight) / 100 }}
			/>
			<GridContainer className="navbar">
				<div className="navbar-content">
					<ul className="navbar-list">
						<li className="navbar-list-logo">
							<Link href="/">
								<Image
									src="/assets/images/branding/ieee-logo-white.png"
									alt="IEEE Logo"
									width={50}
									height={50}
								/>
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
										src="/assets/icons/arrow.svg"
										alt=""
										width={10}
										height={10}
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
							className={`navbar-menu-icon ${
								opened ? "opened" : ""
							}`}
							onClick={() => {
								setOpened(!opened);
							}}
						>
							<span />
							<span />
							<span />
							<span />
						</li>
					</ul>
				</div>
			</GridContainer>
		</div>
	);
}
