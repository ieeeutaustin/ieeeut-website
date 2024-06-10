import "./EventsCard.scss";

import Image from "next/image";
import Button from "../Button/Button";

export type EventType = {
	title: string;
	description: string;
	date: string;
	time: string;
	room: string;
	rsvp: string;
	image: string;
}

export default function EventCard({ event }: { event: EventType }) {

	let formattedDate = "";

	if (event) {
		const eventDate = new Date(event.date.replace(/\//g, "/"));
	
		formattedDate = eventDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}

	return (
		<div className="event-card">
			<div>
				<Image
					className="event-image"
					src={event.image || "/assets/images/flyers/default.jpg"	}
					alt=""
					width={200}
					height={200}
				/>
				<div className="event-content">
					<h3>{event.title || "No title"}</h3>
					<p>{event.description}</p>
					<div className="event-details">
						<div className="event-time-loc">
							<p>{formattedDate}</p>
							<div className="flex gap-1 flex-wrap">
								<p>{event.time}</p>
								<p>{event.room && `@`}</p>
								<p>{event.room}</p>
							</div>
						</div>
						{event.rsvp && <Button link={event.rsvp} name="RSVP" type="dark" icon="/assets/icons/calendar-white.svg" newWindow={true}/>}
					</div>
				</div>
			</div>
		</div>
	);
}
