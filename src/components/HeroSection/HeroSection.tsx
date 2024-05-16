import "./HeroSection.scss";

import Image from "next/image";
import Button from "@/components/Button/Button";
import ContinueIcon from "./ContinueIcon";
import { getAll, Event } from "@/database/events";
import HeroTransition from "./HeroTransition";

import HeroBackground from "../../../public/assets/images/backgrounds/HeroBackground.jpg";

function getUpcoming(events: Event[]) {

	const currentDate = new Date();
	let upcomingEvent = null;
	let upcomingDate = null;

	for (let i = 0; i < events.length; i++) {
		const eventDate = new Date(events[i].date.replace(/\//g, "/"));

		eventDate.setHours(19);

		if (eventDate > currentDate && (!upcomingDate || eventDate < upcomingDate)) {
			upcomingDate = eventDate;
			upcomingEvent = events[i];
		}
	}

	return upcomingEvent;
}

export default async function HeroSection() {
	const events: Event[] = await getAll();
	const upcomingEvent = getUpcoming(events);

	let eventDate = null;
	let formattedDate = null;

	if (upcomingEvent) {
		eventDate = new Date(upcomingEvent.date.replace(/\//g, "/"));
		formattedDate = eventDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}

	return (
		<div className="hero-section">
			<div className="hero-content">
				<HeroTransition />
				<ContinueIcon />
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
						<p>{upcomingEvent.description}</p>
						<div>
							<p><span>{formattedDate}</span><br />{upcomingEvent.time}{upcomingEvent.room && ` @ ${upcomingEvent.room}`}</p>
							{upcomingEvent.rsvp && <Button link={upcomingEvent.rsvp || "/"} name="RSVP" type="light" icon="/assets/icons/calendar.svg" newWindow={true}/>}
						</div>
					</div>
				</div>
			</div>}
			<Image
				className="hero-background"
				src={HeroBackground}
				alt=""
				height={1080}
				width={1920}
				priority={true}
				placeholder="blur"
			/>
		</div>
	);
}
