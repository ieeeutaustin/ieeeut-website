import HeroSection from "@/components/HeroSection/HeroSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import HeaderSection from "@/components/HeaderSection/HeaderSection";

export const metadata = {
	title: "About | IEEE UT"
};

export default function About() {
	return (
		<>
			<HeaderSection title="About Us" image="/assets/images/Yoga2.jpg" />
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="/assets/images/Halloween.jpg"
			>
				<h2>Who are we?</h2>
				<p>
					We are the UT Austin branch of the globally recognized
					Institute of Electrical and Electronics Engineers (IEEE). We
					are a professional, academic, and social development
					organization that hosts corporate-sponsored talks,
					informational workshops, and recreational events aimed to
					enrich members’ experience at UT.
				</p>
				<Button name="Learn More" link="/" />
			</TextSection>
		</>
	);
}
