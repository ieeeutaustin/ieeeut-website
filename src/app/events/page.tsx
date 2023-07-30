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
				image="/assets/images/Iceskating.jpg"
			/>
			<EventsSection full={true} />
		</>
	);
}
