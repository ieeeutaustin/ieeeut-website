"use client";

import "./Navbar.scss";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import GridContainer from "@/components/GridContainer/GridContainer";

export default function Navbar() {
	const [clientWindowHeight, setClientWindowHeight] = useState(0);
	const [opened, setOpened] = useState(false);
	const pathname = usePathname();

	const handleScroll = () => {
		setClientWindowHeight(window.scrollY);
	};

	useEffect(() => {
		setClientWindowHeight(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setOpened(false);
	}, [pathname]);

	const navbarLinks = [
		{ title: "Home", link: "/", exact: true },
		{ title: "Events", link: "/events" },
		{
			title: "Students",
			link: "/students",
			dropdown: [
				{ title: "Membership", link: "/membership" },
				{ title: "Officers", link: "/officers" },
				{ title: "Merch", link: "/merch" },
			],
		},
		{ title: "Corporate", link: "/corporate" },
		{ title: "About", link: "/about" },
	];

	return (
		<div className="navbar-container">
			<div
				className="navbar-background"
				style={{ opacity: Math.min(400, clientWindowHeight) / 400 }}
			/>
			<GridContainer className="navbar">
				<div className="navbar-content">
					<Link href="/" className="navbar-logo">
						<Image
							src="/assets/images/branding/ieeeut-logo.svg"
							// src="/assets/images/branding/ieee-logo-white.png"
							alt="IEEE Logo"
							width={70}
							height={70}
						/>
					</Link>
					<ul className={`navbar-links ${opened ? "opened" : ""}`}>
						{navbarLinks.map((link, index) => (
							link.dropdown && link.dropdown.length > 0 ? (
								<li key={index} className={`navbar-dropitem ${pathname.startsWith(link.link) && 'active'}`}>
									<Link href={link.link}>
										{link.title}
										<Image
											src="/assets/icons/arrow.svg"
											alt=""
											width={10}
											height={10}
										/>
									</Link>
				
									<ul className="navbar-dropdown" 
										style={{ 
											borderRadius: `${10 * (1 - Math.min(400, clientWindowHeight) / 400)}px ${10 * (1 - Math.min(400, clientWindowHeight) / 400)}px 10px 10px`
										}}>
										<div className="dropdown-dash-separator" />
										{link.dropdown.map((dropdownLink, dropdownIndex) => (
											<li key={dropdownIndex} className={pathname.startsWith(dropdownLink.link) ? 'active' : ''}>
												<Link href={dropdownLink.link}>
													{dropdownLink.title}
												</Link>
											</li>
										))}
										<div className="dropdown-dash-separator" />
									</ul>
								</li>
							) : (
								<li key={index} className={(link.exact && pathname === link.link || !link.exact && pathname.startsWith(link.link)) ? 'active' : ''}>
									<Link href={link.link}>{link.title}</Link>
								</li>
							)
						))}
					</ul>
					<Link href="/links" className="navbar-socials">
						Links
						<Image
							src="/assets/icons/rightarrow.svg"
							alt=""
							width={13}
							height={13}
						/>
					</Link>
					<div
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
					</div>
				</div>
			</GridContainer>
		</div>
	);
}
