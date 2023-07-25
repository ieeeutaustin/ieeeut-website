import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import OfficerSection from "@/components/OfficersSection/OfficerSection";
import Button from "@/components/Button/Button";

export const metadata = {
	title: "Students"
};

export default function Students() {
	return (
		<>
			<HeaderSection title="Students" image="hero-image.jpg" />
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="./patrickamogh.jpg"
			>
				<h2>Open to All!</h2>
				<p>
					All ECE students receive access to the following resources:
				</p>
				<Button name="Learn More" link="/about" />
			</TextSection>
		</>
	);
}
