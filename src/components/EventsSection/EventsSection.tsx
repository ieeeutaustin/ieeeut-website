import "./EventsSection.scss";

import Image from "next/image";

import EventsCard from "../EventsCard/EventsCard";
import Button from "../Button/Button";
import { getEvents } from "@/utils/events";


export default function EventsSection(props: any) {
	const full: boolean = props.full;
	let events: any = getEvents();

	if (!full) events = events.slice(0, 8);
	else events = events.slice(0, 24);

	return (
		<div className="events-section">
			<div className="events-section-background">
				<div className="white-block" />
				<Image
					src="/assets/images/backgrounds/WhiteBackground.jpg"
					alt="Events Section"
					fill={true}
				/>
			</div>
			{full ? "" : <h2>Our Events</h2>}
			<div className="events-container">
				{events.map((event: any, index: number) => (
					<EventsCard key={index} event={event} />
				))}
			</div>
			{full ? "" : <Button name="All Events" link="/events" />}
		</div>
	);
}
