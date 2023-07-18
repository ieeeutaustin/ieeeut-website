import Navbar from "@/components/Navbar/Navbar";
import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import Footer from "@/components/Footer/Footer";
import OfficerSection from "@/components/OfficersSection/OfficerSection";

export const metadata = {
	title: "Officers"
};

export default function Officers() {
	return (
		<>
			<Navbar />
			<HeaderSection title="Officers" image="hero-image.jpg" />
			<TextSection textSide="center" textCols="5" s>
				<h2>Meet the 23-24 Officers</h2>
				<p>
					These are our lovely IEEE UT officers for the 23-24
					semesters. Contact us if you'd like to apply!
				</p>
			</TextSection>
			<OfficerSection />
			<Footer />
		</>
	);
}
