/*
    This file is where you can add and edit events!
*/

import { getShortURL } from "./shortURLs";

const events: any = [
	{
		title: "Tech Panel (GM #10)",
		desc: "Learn about tech positions from speakers from Apple, Amazon, and more! 11/09 7pm @ ECJ 1.202",
		date: "11.09",
		image: "/assets/images/flyers/f23-gm-10.jpg",
		url: getShortURL("gm-10")
	},
	{
		title: "Light the Night",
		desc: "Join a fundraising for Leukemia with IEEE! 11/02 5:30pm - 9:00pm",
		date: "11.02",
		image: "/assets/images/flyers/f23-light-the-night.jpg",
		url: getShortURL("ltn")
	},
	{
		title: "Registration Event (GM #9)",
		desc: "Course registration help & Freebirds! 10/25 7pm @ ETC 2.136",
		date: "10.25",
		image: "/assets/images/flyers/f23-gm-9.jpg",
		url: getShortURL("gm-9")
	},
	{
		title: "Rock Painting (GM #8)",
		desc: "De-stress, paint, and snack one some Chi'Lantro! 10/19 7pm @ ETC 2.136",
		date: "10.19",
		image: "/assets/images/flyers/f23-gm-8.jpg",
		url: getShortURL("gm-8")
	},
	{
		title: "HDR Tech Talk",
		desc: "Meet with HDR and make connections! 10/17 7pm @ Mulva Foyer",
		date: "10.17",
		image: "/assets/images/flyers/f23-hdr.jpg",
		url: getShortURL("hdr")
	},
	{
		title: "Apple Tech Talk (GM #7)",
		desc: "Listen and network with Apple! 10/12 7pm @ EER 1.518",
		date: "10.12",
		image: "/assets/images/flyers/f23-gm-7.jpg",
		url: getShortURL("gm-7")
	},
	{
		title: "IEEE x WECE (GM #6)",
		desc: "Join us and WECE for minute to win it games! 10/05 7pm @ ETC 2.136",
		date: "10.05",
		image: "/assets/images/flyers/f23-gm-6.jpg",
		url: getShortURL("gm-6")
	},
	{
		title: "Casino Game Night (GM #5)",
		desc: "Have fun, play games, and join the raffle! 7-8:30 pm @ EER 3.646",
		date: "09.28",
		image: "/assets/images/flyers/f23-gm-5.jpg",
		url: getShortURL("gm-5")
	},
	{
		title: "Burns & McDonnell Tech Talk (GM #4)",
		desc: "Learn about Burns & McDonnell and get a chance to network! 7-8 pm @ EER 1.518",
		date: "09.21",
		image: "/assets/images/flyers/f23-gm-4.jpg",
		url: getShortURL("gm-4")
	},
	{
		title: "Optiver Tech Talk (GM #3)",
		desc: "Listen to Optiver and get a chance to network! 7-8 pm @ EER 1.518",
		date: "09.14",
		image: "/assets/images/flyers/f23-gm-3.jpg",
		url: getShortURL("gm-3")
	},
	{
		title: "Leadership Retreat",
		desc: "Learn about AO positions and becoming and IEEE officer! 5-8 pm @ Zilker Park",
		date: "09.08",
		image: "/assets/images/flyers/f23-leadership-retreat.jpg",
		url: getShortURL("leader-retreat")
	},
	{
		title: "FamilIEEE Kickoff (GM #2)",
		desc: "Join and complete with FamilIEEEs! 7-8 pm @ ETC 2.136",
		date: "09.07",
		image: "/assets/images/flyers/f23-gm-2.jpg",
		url: getShortURL("gm-2")
	},
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
		image: "/assets/images/flyers/f23-gm-1.jpg",
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
	var currentDate = new Date();
	var selected = 0;

	for (var i = 0; i < events.length; i++) {
		var month = parseInt(events[i].date.split(".")[0]);
		var day = parseInt(events[i].date.split(".")[1]);

		// This creates a date at exactly 7pm (CDT) of the event day
		var eventDate = new Date(
			Date.UTC(currentDate.getFullYear(), month - 1, day + 1, 0, 0, 0)
		);

		if (eventDate.getTime() < currentDate.getTime()) break;
		else selected = i;
	}

	selected = Math.max(0, selected);
	selected = Math.min(events.length, selected);

	return events[selected];
}
