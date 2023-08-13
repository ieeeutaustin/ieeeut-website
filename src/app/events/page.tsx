import HeaderSection from "@/components/HeaderSection/HeaderSection";
import EventsSection from "@/components/EventsSection/EventsSection";

export const metadata = {
	title: "Events | IEEE UT"
};

export default function Home() {
	return (
		<>
			<HeaderSection
				title="Events"
				desc="Check out some upcoming and past events we are hosting! Make sure to RSVP!"
				image="/assets/images/iceskating.jpg"
				imageAlt="IEEE and IEEE RAS group photo in the middle of an iceskating rink."
			/>
			<EventsSection full={true} />
		</>
	);
}
