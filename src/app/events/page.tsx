import HeaderSection from "@/components/HeaderSection/HeaderSection";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EventsSection from "@/components/EventsSection/EventsSection";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeaderSection
				title="Events"
				desc="Check out some upcoming and past events we are hosting!"
				image="hero-image.jpg"
			/>
			<EventsSection full={true} />
			<Footer />
		</>
	);
}
