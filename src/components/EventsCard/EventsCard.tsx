import "./EventsCard.scss";

import Image from "next/image";
import Button from "../Button/Button";

export default function EventCard(props: any) {

	const event = props.event;
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
			<Image
				className="event-image"
				src={event.image || "/assets/images/flyers/default.jpg"	}
				alt=""
				width={200}
				height={200}
			/>
			<div className="event-content">
				<h3>{event.title || "No title"}</h3>
				<p>{event.desc}</p>
				<div>
					<p><span>{formattedDate}</span><br />{event.time}{event.room && ` @ ${event.room}`}</p>
					{event.rsvp && <Button link={event.rsvp} name="RSVP" type="dark" icon="/assets/icons/calendar-white.svg" newWindow={true}/>}
				</div>
			</div>
		</div>
	);
}
