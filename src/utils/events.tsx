/*
    This file is where you can add and edit events!
*/

import { getShortURL } from "./shortURLs";

const events: any = [
	{
		title: "First General Meeting",
		desc: "Learn about IEEE and how you can become a member (or an assistant officer 👀)! RSVP for some free food!",
		date: "08/29/24",
		rsvp: "https://www.instagram.com/ieee.ut"
	},
	{
		title: "FinalIEEE",
		desc: "Last GM of the semester! Come join us for some fun and games! We'll be revealing the new exec and the FAM winners!",
		date: "04/18/24",
		time: "7-8 pm",
		room: "CPE 2.210",
		image: "/assets/images/flyers/s24-finalieee.jpg",
		rsvp: getShortURL("finale")
	},
	{
		title: "Leadership Retreat",
		desc: "Want to learn about the officer positions? Join us for a fun retreat! Supplies and food provided!",
		date: "04/06/24",
		time: "4 pm",
		room: "Jim Hogg Park",
		image: "/assets/images/flyers/s24-retrieeet.jpg",
		rsvp: getShortURL("retreat")
	},
	{
		title: "Spring Registration",
		desc: "Ready for registration? Even if you are, get some tips from us! We're providing food too!",
		date: "04/04/24",
		time: "7-8 pm",
		room: "CPE 2.210",
		image: "/assets/images/flyers/s24-registration.jpg",
		rsvp: getShortURL("courses")
	},
	{
		title: "Telescope Social",
		desc: "Watch the stars, play some games, and enjoy some snacks with us!",
		date: "04/03/24",
		time: "7-8 pm",
		room: "EER 0.706",
		image: "/assets/images/flyers/s24-telescope.jpg",
		rsvp: getShortURL("stars")
	},
	{
		title: "Post 319K and Algo Treats!",
		desc: "Nervous for your exam? Well now you can look forward to some free cookies!",
		date: "03/28/24",
		time: "8:30-9 pm",
		room: "Main Tower",
		image: "/assets/images/flyers/s24-post319.jpg"
	},
	{
		title: "Optiver Networking w/ WECE",
		desc: "Join us and WECE for a networking event with Optiver! Food provided!",
		date: "03/19/24",
		time: "7-8 pm",
		room: "Mulva Foyer",
		image: "/assets/images/flyers/s24-optiver.jpg",
		rsvp: getShortURL("optiver")
	},
	{
		title: "Valentines with Valvano",
		desc: "Paint a tote bag guided by Valvano! Supplies and food provided!",
		date: "02/15/24",
		time: "7-8 pm",
		room: "CPE 2.210",
		image: "/assets/images/flyers/s24-valwval.jpg",
		rsvp: getShortURL("valwithval")
	},
	{
		title: "Escape the ECJ!",
		desc: "Explore the ECJ through puzzles and games!",
		date: "02/08/24",
		time: "7-8 pm",
		room: "ECJ 1.222",
		image: "/assets/images/flyers/s24-escape-ecj.jpg",
		rsvp: getShortURL("ecjescape")
	},
	{
		title: "FamilIEEE Kickoff",
		desc: "Join and complete with FamilIEEEs!",
		date: "02/01/24",
		time: "7-8 pm",
		room: "CPE 2.210",
		image: "/assets/images/flyers/s24-fam-kickoff.jpg",
		rsvp: getShortURL("joinafam")
	},
	{
		title: "HDR Workshop",
		desc: "Prepare for expo by networking and mock-interviewing with HDR! 1/25 7pm @ Mulva Foyer",
		date: "01/25/24",
		time: "7-8 pm",
		room: "Mulva Foyer",
		image: "/assets/images/flyers/s24-hdr.jpg",
		rsvp: getShortURL("hdr")
	},
	{
		title: "Tech Panel (GM #10)",
		desc: "Learn about tech positions from speakers from Apple, Amazon, and more! 11/09 7pm @ ECJ 1.202",
		date: "11/09/23",
		time: "7-8 pm",
		room: "ECJ 1.202",
		image: "/assets/images/flyers/f23-gm-10.jpg",
		rsvp: getShortURL("gm-10")
	},
	{
		title: "Light the Night",
		desc: "Join a fundraising for Leukemia with IEEE! 11/02 5:30pm - 9:00pm",
		date: "11/02/23",
		time: "7-8 pm",
		room: "Muller Park",
		image: "/assets/images/flyers/f23-light-the-night.jpg",
		rsvp: getShortURL("ltn")
	},
	{
		title: "Registration Event (GM #9)",
		desc: "Course registration help & Freebirds! 10/25 7pm @ ETC 2.136",
		date: "10/25/23",
		time: "7-8 pm",
		room: "ETC 2.136",
		image: "/assets/images/flyers/f23-gm-9.jpg",
		rsvp: getShortURL("gm-9")
	},
	{
		title: "Rock Painting (GM #8)",
		desc: "De-stress, paint, and snack one some Chi'Lantro! 10/19 7pm @ ETC 2.136",
		date: "10/19/23",
		time: "7-8 pm",
		room: "ETC 2.136",
		image: "/assets/images/flyers/f23-gm-8.jpg",
		rsvp: getShortURL("gm-8")
	},
	{
		title: "HDR Tech Talk",
		desc: "Meet with HDR and make connections! 10/17 7pm @ Mulva Foyer",
		date: "10/17/23",
		time: "7-8 pm",
		room: "Mulva Foyer",
		image: "/assets/images/flyers/f23-hdr.jpg",
		rsvp: getShortURL("hdr")
	},
	{
		title: "Apple Tech Talk (GM #7)",
		desc: "Listen and network with Apple! 10/12 7pm @ EER 1.518",
		date: "10/12/23",
		time: "7-8 pm",
		room: "EER 1.518",
		image: "/assets/images/flyers/f23-gm-7.jpg",
		rsvp: getShortURL("gm-7")
	},
	{
		title: "IEEE x WECE (GM #6)",
		desc: "Join us and WECE for minute to win it games! 10/05 7pm @ ETC 2.136",
		date: "10/05/23",
		time: "7-8 pm",
		room: "ETC 2.136",
		image: "/assets/images/flyers/f23-gm-6.jpg",
		rsvp: getShortURL("gm-6")
	},
	{
		title: "Casino Game Night (GM #5)",
		desc: "Have fun, play games, and join the raffle! 7-8:30 pm @ EER 3.646",
		date: "09/28/23",
		time: "7-8 pm",
		room: "EER 3.646",
		image: "/assets/images/flyers/f23-gm-5.jpg",
		rsvp: getShortURL("gm-5")
	},
	{
		title: "Burns & McDonnell Tech Talk (GM #4)",
		desc: "Learn about Burns & McDonnell and get a chance to network! 7-8 pm @ EER 1.518",
		date: "09/21/23",
		time: "7-8 pm",
		room: "EER 1.518",
		image: "/assets/images/flyers/f23-gm-4.jpg",
		rsvp: getShortURL("gm-4")
	},
	{
		title: "Optiver Tech Talk (GM #3)",
		desc: "Listen to Optiver and get a chance to network! 7-8 pm @ EER 1.518",
		date: "09/14/23",
		time: "7-8 pm",
		room: "EER 1.518",
		image: "/assets/images/flyers/f23-gm-3.jpg",
		rsvp: getShortURL("gm-3")
	},
	{
		title: "Leadership Retreat",
		desc: "Learn about AO positions and becoming and IEEE officer! 5-8 pm @ Zilker Park",
		date: "09/08/23",
		time: "7-8 pm",
		room: "Zilker Park",
		image: "/assets/images/flyers/f23-leadership-retreat.jpg",
		rsvp: getShortURL("leader-retreat")
	},
	{
		title: "FamilIEEE Kickoff (GM #2)",
		desc: "Join and complete with FamilIEEEs! 7-8 pm @ ETC 2.136",
		date: "09/07/23",
		time: "7-8 pm",
		room: "ETC 2.136",
		image: "/assets/images/flyers/f23-gm-2.jpg",
		rsvp: getShortURL("gm-2")
	},
	{
		title: "Expo Prep",
		desc: "Get ready for Fall Expo with us! 7-8 pm @ ECJ 1.202",
		date: "09/05/23",
		time: "7-8 pm",
		room: "ECJ 1.202",
		image: "/assets/images/flyers/f23-expo-prep.jpg",
		rsvp: getShortURL("expo")
	},
	{
		title: "First General Meeting",
		desc: "Come join us for some Pot Belly! 7-8 pm @ ECJ 1.202",
		date: "08/31/23",
		time: "7-8 pm",
		room: "ECJ 1.202",
		image: "/assets/images/flyers/f23-gm-1.jpg",
		rsvp: getShortURL("gm-1")
	},
	{
		title: "Pease Park Litter Pickup",
		desc: "Volunteer with us to help clean up Pease Park!",
		date: "04/25/23",
		time: "7-8 pm",
		room: "Pease Park",
		image: "/assets/images/flyers/pease_park.jpg",
		rsvp: "https://www.instagram.com/p/CrMBlZNu7HS/"
	},
	{
		title: "Boat Social",
		desc: "End of the year boat social!",
		date: "04/16/23",
		time: "7-8 pm",
		room: "Lake Travis",
		image: "/assets/images/flyers/boat_social.jpeg",
		rsvp: "https://www.instagram.com/p/CqihT5OLq9C/"
	},
	{
		title: "Elections",
		desc: "Come vote for your 2023-24 IEEE reps!",
		date: "04/13/23",
		time: "7-8 pm",
		room: "ECJ 1.136",
		image: "/assets/images/flyers/elections.jpeg",
		rsvp: "https://www.instagram.com/p/Cq5v660LOCU/"
	},
	{
		title: "Cookie BuddIEEEs",
		desc: "Get some free cookies!",
		date: "04/11/23",
		time: "7-8 pm",
		room: "ECJ 1.136",
		image: "/assets/images/flyers/Cookies.png",
		rsvp: "https://www.instagram.com/p/Cqb2-dUL_P0/"
	},
	{
		title: "Paddleboarding",
		desc: "Join us for some fun paddleboarding!",
		date: "04/08/23",
		time: "7-8 pm",
		room: "Lady Bird Lake",
		image: "/assets/images/flyers/paddleboarding.jpg",
		rsvp: "https://www.instagram.com/p/CqTF84nLUZK/"
	},
	{
		title: "Registration Tips",
		desc: "Need help with registration?",
		date: "04/06/23",
		time: "7-8 pm",
		room: "ECJ 1.136",
		image: "/assets/images/flyers/registration.jpeg",
		rsvp: "https://www.instagram.com/p/CqYj98YuRE7/"
	},
	{
		title: "IEEE Alumni Panel",
		desc: "Let's see where our members are now!",
		date: "03/23/23",
		time: "7-8 pm",
		room: "ECJ 1.136",
		image: "/assets/images/flyers/alumni_panel.jpeg",
		rsvp: "https://www.instagram.com/p/CqBJCHCrg3r/"
	}
];

export function getEvents() {

	const currentDate = new Date();

	for (let i = 0; i < events.length; i++) {
		const eventDate = new Date(events[i].date.replace(/\//g, "/"));

		eventDate.setHours(19);

		if (eventDate < currentDate) {
			events[i].rsvp = null;
		}
	}

	return events;
}

export function getUpcoming() {

	const currentDate = new Date();
	let upcomingEvent = null;
	let upcomingDate = null;

	for (let i = 0; i < events.length; i++) {
		const eventDate = new Date(events[i].date.replace(/\//g, "/"));

		eventDate.setHours(19);

		if (eventDate > currentDate && (!upcomingDate || eventDate < upcomingDate)) {
			upcomingDate = eventDate;
			upcomingEvent = events[i];
		}
	}

	return upcomingEvent;
}
