"use client";
import "./EventsCard.scss";
import Button from "../Button/Button";
import { useState } from "react";

export default function EventCard(props: any) {
	const [details, setDetails] = useState(false);

	return (
		<div
			className={`events-card ${details ? "details" : ""}`}
			onClick={() =>
				window.matchMedia("(hover: none)").matches
					? setDetails(!details)
					: ""
			}
		>
			<h5 className="events-card-date">{props.date}</h5>
			<div className="events-card-content">
				<div className="events-card-image-wrapper">
					<img src={props.image} alt="" />
				</div>
				<div className="events-card-text">
					<h4>{props.title}</h4>
					<p>{props.desc}</p>
					<Button name="RSVP" link={props.url} type="outlined" />
				</div>
			</div>
		</div>
	);
}
