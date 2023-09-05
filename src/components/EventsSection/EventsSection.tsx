import "./EventsSection.scss";
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
			{full ? "" : <h2>Events</h2>}
			<div className="events-container">
				{events.map((event: any) => (
					<EventsCard key={event.title} {...event} />
				))}
			</div>
			{full ? "" : <Button name="All Events" link="/events" />}
		</div>
	);
}
