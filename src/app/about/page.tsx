import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import FlexSection from "@/components/FlexSection/FlexSection";
import IconList from "@/components/IconList/IconList";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import Footer from "@/components/Footer/Footer";

export default function About() {
	return (
		<>
			<Navbar />
			<HeaderSection title="About Us" image="hero-image.jpg" />
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="./halloween.jpg"
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
				<Button>Learn More</Button>
			</TextSection>
			<Footer />
		</>
	);
}
