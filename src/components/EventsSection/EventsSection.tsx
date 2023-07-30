import "./EventsSection.scss";
import EventsCard from "../EventsCard/EventsCard";
import Button from "../Button/Button";

export default function EventsSection(props: any) {
	const full: boolean = props.full;

	let events = [
		{
			title: "Pease Park Litter Pickup",
			desc: "Volunteer with us to help clean up Pease Park!",
			date: "04.25",
			image: "/assets/images/flyers/pease_park.jpg",
			url: "https://www.instagram.com/p/CrMBlZNu7HS/"
		},
		{
			title: "Boat Social",
			desc: "End of the year boat social!",
			date: "04.16",
			image: "/assets/images/flyers/boat_social.jpeg",
			url: "https://www.instagram.com/p/CqihT5OLq9C/"
		},
		{
			title: "Elections",
			desc: "Come vote for your 2023-24 IEEE reps!",
			date: "04.13",
			image: "/assets/images/flyers/elections.jpeg",
			url: "https://www.instagram.com/p/Cq5v660LOCU/"
		},

		{
			title: "Cookie BuddIEEEs",
			desc: "Get some free cookies!",
			date: "04.11",
			image: "/assets/images/flyers/Cookies.png",
			url: "https://www.instagram.com/p/Cqb2-dUL_P0/"
		},
		{
			title: "Paddleboarding",
			desc: "Join us for some fun paddleboarding!",
			date: "04.08",
			image: "/assets/images/flyers/paddleboarding.jpg",
			url: "https://www.instagram.com/p/CqTF84nLUZK/"
		},
		{
			title: "Registration Tips",
			desc: "Need help with registration?",
			date: "04.06",
			image: "/assets/images/flyers/registration.jpeg",
			url: "https://www.instagram.com/p/CqYj98YuRE7/"
		},
		{
			title: "IEEE Alumni Panel",
			desc: "Let's see where our members are now!",
			date: "03.23",
			image: "/assets/images/flyers/alumni_panel.jpeg",
			url: "https://www.instagram.com/p/CqBJCHCrg3r/"
		}
	];

	if (!full) events = events.slice(0, 8);
	else events = events.slice(0, 24);

	return (
		<div className="events-section">
			{full ? "" : <h2>Events</h2>}
			<div className="events-container">
				{events.map((event) => (
					<EventsCard key={event.title} {...event} />
				))}
			</div>
			{full ? "" : <Button name="All Events" link="/events" />}
		</div>
	);
}
