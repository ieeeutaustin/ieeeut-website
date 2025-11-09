import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import OfficerSection from "@/components/OfficersSection/OfficerSection";

export const metadata = {
	title: "Officers | IEEE UT",
	description: "Meet the IEEE UT officers for this school year and learn about the application process.",
};

export default function Officers() {
	return (
		<>
			<HeaderSection
				title="Officers"
				image="/assets/images/officers-22-2.jpg"
				imageAlt="Group photo of IEEE officers of 2022-2023 in an iceskating rink"
			/>
			<TextSection textSide="center" textCols="5">
				<h2>Meet the 25-26 Officers</h2>
				<p>
					These are our lovely IEEE UT officers for the 25-26
					school year.
				</p>
				<i>
					Assistant officer applications for the 2025-26 school year are now closed. Officer applications for 2026-27 will be at the end of the 2025 spring semester!
				</i>
			</TextSection>
			<OfficerSection />
		</>
	);
}
