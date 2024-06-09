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
			<HeaderSection
				title="About Us"
				image="/assets/images/yoga-2.jpg"
				imageAlt="Dr. Yerraballi talks with a small group of students around him"
			/>
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="/assets/images/boatparty-22.jpg"
				graphicAlt="Group photo of IEEE members on rocky hill island in the middle of a lake."
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
			<GallerySection
				images={[
					"/assets/images/award.jpg",
					"/assets/images/soccer-21.jpg",
					"/assets/images/yoga-3.jpg",
					"break",
					"/assets/images/greece.jpg",
					"/assets/images/camping-retreat.jpg"
				]}
				alts={[
					"3 IEEE members present an award in front of Austin City Hall",
					"Group photo of soccer intramural team in front of soccer goal",
					"IEEE members reaching over their heads in yoga position",
					"",
					"Photo from back of classroom with general meeting",
					"Group photo from a outdoor camping retreat"
				]}
				hideAfter={3}
			/>
		</>
	);
}
