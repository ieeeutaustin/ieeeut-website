"use client";
import "./EventsCard.scss";

export default function EventCard(props: any) {
	const clickHandler = (url: string) => {
		if (url != "") window.open(url, "_blank");
	};

	return (
		<div
			className="events-card"
			onClick={() => {
				clickHandler(props?.url);
			}}
		>
			<h5 className="events-card-date">{props.date}</h5>
			<div className="events-card-content">
				<div className="events-card-image-wrapper">
					<img src={props.image} alt="" />
				</div>
				<div className="events-card-text">
					<h4>{props.title}</h4>
					<p>{props.desc}</p>
				</div>
			</div>
		</div>
	);
}
