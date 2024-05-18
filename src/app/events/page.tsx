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
				desc="Check out some of our upcoming and past events! Make sure to RSVP to get some food!"
				image="/assets/images/iceskating.jpg"
				imageAlt="IEEE and IEEE RAS group photo in the middle of an iceskating rink."
			/>
			<EventsSection full={true} />
		</>
	);
}

export const revalidate = 3600;