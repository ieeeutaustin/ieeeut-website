import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import OfficerSection from "@/components/OfficersSection/OfficerSection";
import Button from "@/components/Button/Button";

export const metadata = {
	title: "Merch"
};

export default function Merch() {
	return (
		<>
			<HeaderSection title="Merch" image="hero-image.jpg" />
			<TextSection
				textSide="left"
				textCols="3"
				graphicSrc="./assets/files/MerchVideo.mp4"
			>
				<h2>What We Do</h2>
				<p>IEEE runs events for ECE students year-round.</p>
				<p>
					We bring ECE students of all years together to learn from
					each other and build a community within the department
				</p>
				<Button link="/about">Learn More</Button>
			</TextSection>
			<video
				autoPlay={true}
				muted={true}
				loop={true}
				style={{ width: 50 + "%", margin: "0 0 0 auto" }}
			>
				<source src="./assets/files/MerchVideo.mp4" type="video/mp4" />
			</video>
		</>
	);
}
