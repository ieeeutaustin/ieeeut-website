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
			image: "Armaan.png",
			imageHover: "CarpetRoadOverlay.png"
		},
		{
			name: "Aman Arham",
			position: "Corporate Director",
			email: "liasion@ieeeut.org",
			image: "Aman.jpg",
			imageHover: "CarpetRoadOverlay.png"
		},
		{
			name: "Arnav Vats",
			position: "Corporate Liaison",
			email: "corporate@ieeeut.org",
			image: "Arnav.jpg",
			imageHover: "PolaroidOverlay.png"
		},
		{
			name: "Ana Yang",
			position: "Membership and Resources Assistant Director",
			email: "mr@ieeeut.org",
			image: "Armaan.png",
			imageHover: "CarpetRoadOverlay.png"
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
			image: "Andrew.jpg",
			imageHover: "CarpetRoadOverlay.png"
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
			name: "Joaquin Escobar",
			position: "Communications Director",
			email: "comms@ieeeut.org",
			image: "Joaquin.png",
			imageHover: "JoaquinHover2.png"
		},
		{
			name: "Joaquin Escobar",
			position: "Communications Director",
			email: "comms@ieeeut.org",
			image: "Joaquin.png",
			imageHover: "JoaquinHover3.png"
		},
		{
			name: "Joaquin Escobar",
			position: "Communications Director",
			email: "comms@ieeeut.org",
			image: "Joaquin.png",
			imageHover: "JoaquinHover4.png"
		}
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
