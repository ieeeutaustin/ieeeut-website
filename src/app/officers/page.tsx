import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import OfficerSection from "@/components/OfficersSection/OfficerSection";
import Button from "@/components/Button/Button";
import { getURL } from "@/utils/socials";

export const metadata = {
	title: "Officers | IEEE UT"
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
				<h2>Meet the 23-24 Officers</h2>
				<p>
					These are our lovely IEEE UT officers for the 23-24
					semesters.
				</p>
				<p>
					Applications open at the beginning of the fall semester.
					Keep an eye out!
				</p>
				<Button
					name="Instagram"
					link={getURL("instagram")}
					newWindow={true}
					icon="/assets/icons/instagram.svg"
				/>
			</TextSection>
			<OfficerSection />
		</>
	);
}
