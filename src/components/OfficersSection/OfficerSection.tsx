import "./OfficerSection.scss";
import OfficerCard from "../OfficerCard/OfficerCard";

export default function OfficerSection(props: any) {
	const officers = [
		{
			name: "Andrew Chang",
			position: "Chair",
			email: "chair@ieeeut.org",
			image: "Andrew.jpg",
			imageHover: "AndrewHover.png"
		},
		{
			name: "Paul Bessler",
			position: "Vice Chair",
			email: "vice@ieeeut.org",
			image: "Paul.jpg",
			imageHover: "PaulHover.png"
		},
		{
			name: "Armaan Kolsawala",
			position: "Internal Director",
			email: "internal.dir@ieeeut.org",
			image: "Armaan.jpg"
		},
		{
			name: "Aman Arham",
			position: "Corporate Director",
			email: "corporate@ieeeut.org",
			image: "Aman.jpg"
		},
		{
			name: "Arnav Vats",
			position: "Corporate Liaison",
			email: "liasion@ieeeut.org",
			image: "Arnav.jpg",
			imageHover: "PolaroidOverlay.png"
		},
		{
			name: "Ana Yang",
			position: "Membership and Resources Director",
			email: "mr@ieeeut.org",
			image: "Ana.jpg"
		},
		{
			name: "Aastha Agrawal",
			position: "Internal Activities and Events Director",
			email: "internal.ae@ieeeut.org",
			image: "Aastha.jpg",
			imageHover: "PolaroidOverlay.png"
		},
		{
			name: "Juan Gonzales",
			position: "External Activities and Events Director",
			email: "external.ae@ieeeut.org",
			image: "JJ.png",
			imageHover: "PolaroidOverlay.png"
		},
		{
			name: "Trisha Nguyen",
			position: "Communications Director",
			email: "comms@ieeeut.org",
			image: "Trisha.jpg",
			imageHover: "PolaroidOverlay.png"
		},
		{
			name: "Joaquin Escobar",
			position: "Communications Director",
			email: "comms@ieeeut.org",
			image: "Joaquin.png",
			imageHover: "JoaquinHover1.png"
		},
		{
			name: "Anya Patwa",
			position: "Communications Assistant Director",
			email: "comms@ieeeut.org",
			image: "Anya.jpg",
			imageHover: "Anya.jpg"
		},
		{
			name: "Emily Han",
			position: "Communications Assistant Director",
			email: "comms@ieeeut.org",
			image: "Emily.jpg"
		},
		{
			name: "Aaron Sulbaran",
			position: "External Activites and Events Assistant Director",
			email: "external.ae@ieeeut.org",
			image: "Aaron.jpg"
		},
		{
			name: "Ayesha Haider",
			position: "External Activites and Events Assistant Director",
			email: "external.ae@ieeeut.org",
			image: "Ayesha.jpeg"
		},
		{
			name: "Jack Son",
			position: "Internal Activites and Events Assistant Director",
			email: "internal.ae@ieeeut.org",
			image: "Jack.jpeg"
		},
		{
			name: "Anneke Anderson",
			position: "Internal Activites and Events Assistant Director",
			email: "internal.ae@ieeeut.org",
			image: "Anneke.jpg"
		},
		{
			name: "Amina Meddad",
			position: "Membership and Resources Assistant Director",
			email: "mr@ieeeut.org",
			image: "Amina.jpg"
		},
	];

	return (
		<div className="officer-section">
			<div className="officer-container">
				{officers.map((officer: any) => (
					<OfficerCard key={officer.name} {...officer} />
				))}
			</div>
		</div>
	);
}
