import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import OfficerSection from "@/components/OfficersSection/OfficerSection";

export const metadata = {
	title: "Officers"
};

export default function Officers() {
	return (
		<>
			<HeaderSection
				title="Officers"
				image="./assets/images/officers/Group2.jpg"
			/>
			<TextSection textSide="center" textCols="5">
				<h2>Meet the 23-24 Officers</h2>
				<p>
					These are our lovely IEEE UT officers for the 23-24
					semesters. Contact us if you&apos;d like to apply!
				</p>
			</TextSection>
			<OfficerSection />
		</>
	);
}
