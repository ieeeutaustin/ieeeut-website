'use client'

import "./HeroSection.scss";
import { use, useEffect, useState } from "react";

import Image from "next/image";
import Button from "@/components/Button/Button";
import { getUpcoming } from "@/utils/events";

export default function HeroSection() {
	const upcomingEvent = getUpcoming();
	const [upcomingEventDate, setUpcomingEventDate] = useState("");
	const [showExpandArrow, setShowExpandArrow] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			
			setShowExpandArrow(scrollTop === 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (upcomingEvent) {
			const eventDate = new Date(upcomingEvent.date.replace(/\//g, "/"));
			const formattedDate = eventDate.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			});

			setUpcomingEventDate(formattedDate);
		}
	}, [upcomingEvent]);

	return (
		<div className="hero-section">
			<div className="hero-content">
				<div className="hero-title">
					<span>IEEE</span>
					<span>UT</span>
				</div>
				<i className="hero-subtitle">UT Austin’s official chapter of the Institute of Electrical and Electronics Engineers and home to the largest ECE organization at UT</i>
				<div className="hero-buttons">
					<Button link="/join" type="outlined member">
						Become a <span>member</span>
					</Button>
					<Button link="/corporate" type="outlined sponsor">
						Become a <span>sponsor</span>
					</Button>
				</div>
				<Image src={"/assets/icons/dropdown.svg"} alt={""} width={30} height={30} className={`hero-expand-arrow ${!showExpandArrow ? 'hidden' : ''}`}/>
			</div>
			{upcomingEvent && <div className="hero-event-wrapper">
				<h2>Upcoming Event!</h2>
				<div className="hero-event">
					<Image
						className="hero-event-image"
						src={upcomingEvent.image || "/assets/images/flyers/default.jpg"}
						alt=""
						width={200}
						height={200}
					/>
					<div className="hero-event-content">
						<h3>{upcomingEvent.title || "No title"}</h3>
						<p>{upcomingEvent.desc}</p>
						<div>
							<p><span>{upcomingEventDate}</span><br />{upcomingEvent.time}{upcomingEvent.room && ` @ ${upcomingEvent.room}`}</p>
							{upcomingEvent.rsvp && <Button link={upcomingEvent.rsvp || "/"} name="RSVP" type="light" icon="/assets/icons/calendar.svg" newWindow={true}/>}
						</div>
					</div>
				</div>
			</div>}
			<Image
				className="hero-background"
				src="/assets/images/backgrounds/HeroBackground.jpg"
				alt=""
				height={1080}
				width={1920}
				priority={true}
			/>
		</div>
	);
}
