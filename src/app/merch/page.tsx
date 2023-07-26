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
				<h2>Our Merch</h2>
				<p>
					Take a look at out merch. We design our clothes with a
					combination of modern simplicity and nostalgic retro.
				</p>
				<p>
					We also have things like stickers, totes, and beanies too!
				</p>
				<Button name="Learn More" link="/about" />
			</TextSection>
		</>
	);
}
