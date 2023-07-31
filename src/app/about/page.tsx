import HeroSection from "@/components/HeroSection/HeroSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import GallerySection from "@/components/GallerySection/GallerySection";

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
					enrich members&apos; experience at UT.
				</p>
				<Button name="Learn More" link="/" />
			</TextSection>
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="/assets/images/Iceskating2.jpg"
			>
				<h2>Who are we <i className="text-[42px]">Really?</i></h2>
				<p>
					We&apos;re students, friends, and family. We genuinely believe in building a community to have fun, meet people, and grow together. The connections we make at IEEE are unlike no other.
				</p>
				<Button name="Learn More" link="/" />
			</TextSection>
			<GallerySection
				images={[
					"/assets/images/DodgeballIM.jpg",
					"/assets/images/Glamping.jpg",
					"/assets/images/JohnDeere.jpg",
					"break",
					"/assets/images/Yoga3.jpg",
					"/assets/images/SoccerIM.jpg"
				]}
			/>
		</>
	);
}
