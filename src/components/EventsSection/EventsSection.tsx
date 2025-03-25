import "./EventsSection.scss";

import Image from "next/image";

import EventsCard from "../EventsCard/EventsCard";
import Button from "../Button/Button";
import { Event, getRecentEvents, getEventCount } from "@/database/events";

function removeOutdatedRSVPs(events: Event[]) {

	const currentDate = new Date();
	const updatedEvents = events.map((event) => {

		let eventDate = new Date(event.date);

		if (!event.time) eventDate.setHours(19);
		if (eventDate.getTime() < currentDate.getTime()) event.rsvp = "";
		
		return event;
	});

	return updatedEvents;
}

export default async function EventsSection(props: any) {

	const full: boolean = props.full;
	const originalEvents = await getRecentEvents(full ? 24 : 4);
	const events : Event[] = removeOutdatedRSVPs(originalEvents);
	const eventCount = await getEventCount();

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
			{full ? "" : <h2>Recent Events</h2>}
			<div className="events-container">
				{events.map((event: any, index: number) => (
					<EventsCard key={index} event={event}/>
				))}
			</div>
			{full ? "" : <Button name={`View ${eventCount - 4} More`} link="/events" />}
		</div>
	);
}
