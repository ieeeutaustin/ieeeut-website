import Navbar from "@/components/Navbar/Navbar";
import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import Footer from "@/components/Footer/Footer";
import OfficerSection from "@/components/OfficersSection/OfficerSection";
import Button from "@/components/Button/Button";

export const metadata = {
	title: "Join"
};

export default function Join() {
	return (
		<>
			<Navbar />
			<HeaderSection title="Join" image="hero-image.jpg" />
			<Footer />
		</>
	);
}
