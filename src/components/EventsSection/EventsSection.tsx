"use client";
import "./EventsSection.scss";
import Button from "../Button/Button";

export default function EventsSection(props: any) {
	const full: boolean = props.full;

	let events = [
		{
			title: "Pease Park Litter Pickup",
			desc: "Volunteer with us to help clean up Pease Park!",
			date: "04.25",
			image: "./assets/flyers/pease_park.jpg",
			url: "https://www.instagram.com/p/CrMBlZNu7HS/"
		},
		{
			title: "Pre-Exam Carepackage",
			desc: "Free snacks, stress toys, and more!",
			date: "04.24",
			image: "./assets/flyers/Purple.png",
			url: "https://www.instagram.com/p/CrZn_wwsIHo"
		},
		{
			title: "Boat Social",
			desc: "End of the year boat social!",
			date: "04.16",
			image: "./assets/flyers/boat_social.jpeg",
			url: "https://www.instagram.com/p/CqihT5OLq9C/"
		},
		{
			title: "Elections",
			desc: "Come vote for your 2023-24 IEEE reps!",
			date: "04.13",
			image: "./assets/flyers/elections.jpeg",
			url: "https://www.instagram.com/p/Cq5v660LOCU/"
		},

		{
			title: "Cookie BuddIEEEs",
			desc: "Get some free cookies!",
			date: "04.11",
			image: "./assets/flyers/Cookies.png",
			url: "https://www.instagram.com/p/Cqb2-dUL_P0/"
		},
		{
			title: "Paddleboarding",
			desc: "Join us for some fun paddleboarding!",
			date: "04.08",
			image: "./assets/flyers/paddleboarding.jpg",
			url: "https://www.instagram.com/p/CqTF84nLUZK/"
		},
		{
			title: "Registration Tips",
			desc: "Need help with registration?",
			date: "04.06",
			image: "./assets/flyers/registration.jpeg",
			url: "https://www.instagram.com/p/CqYj98YuRE7/"
		},

		{
			title: "IEEE Alumni Panel",
			desc: "Let's see where our members are now!",
			date: "03.23",
			image: "./assets/flyers/alumni_panel.jpeg",
			url: "https://www.instagram.com/p/CqBJCHCrg3r/"
		}
	];

	const clickHandler = (url: string) => {
		window.open(url, "_blank");
	};

	if (!full) events = events.slice(0, 8);
	else events = events.slice(0, 24);

	return (
		<div className="events-section">
			{full ? "" : <h2>Events</h2>}
			<div className="events-container">
				{events.map((event) => (
					<div
						className="events-card"
						key={event.title}
						onClick={() => {
							clickHandler(event?.url);
						}}
					>
						<div className="events-card-content">
							<div className="events-card-front">
								<img src={event.image} alt="" />
								<h5>{`${event.date}`}</h5>
							</div>
							<div className="events-card-back">
								<h5>{`${event.date}`}</h5>
								<h4>{`${event.title}`}</h4>
								<p>{event.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			{full ? "" : <Button link="/events">All Events</Button>}
		</div>
	);
}
