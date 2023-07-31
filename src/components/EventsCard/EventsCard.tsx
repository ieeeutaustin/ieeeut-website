"use client";

import "./EventsCard.scss";
import Image from "next/image";
import Button from "../Button/Button";

export default function EventCard(props: any) {
	return (
		<div className="events-card">
			<h5 className="events-card-date">{props.date}</h5>
			<div className="events-card-content">
				<div className="events-card-image-wrapper">
					<Image src={props.image} alt="" height={130} width={130} />
				</div>
				<div className="events-card-text">
					<h4>{props.title}</h4>
					<p>{props.desc}</p>
					<Button name="RSVP" link={props.url} type="outlined" newWindow={true}/>
				</div>
			</div>
		</div>
	);
}
