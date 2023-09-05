/*
    This file is where you can edit existing links
*/

import { getShortURL } from "./shortURLs";

const events: any = [
	{
		title: "Expo Prep",
		desc: "Get ready for Fall Expo with us! 7-8 pm @ ECJ 1.202",
		date: "09.05",
		image: "/assets/images/flyers/f23-expo-prep.jpg",
		url: getShortURL("expo")
	},
	{
		title: "First General Meeting",
		desc: "Come join us for some Pot Belly! 7-8 pm @ ECJ 1.202",
		date: "08.31",
		image: "/assets/images/flyers/fall23-gm-1.jpg",
		url: getShortURL("gm-1")
	},
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

export function getEvents() {
	return events;
}

export function getUpcoming() {
	return events[0];
}
