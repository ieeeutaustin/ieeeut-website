import Link from "next/link";
import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import Button from "@/components/Button/Button";

export const metadata = {
	title: "Students | IEEE UT"
};

export default function Students() {
	return (
		<>
			<HeaderSection
				title="Students"
				image="/assets/images/glamping.jpg"
				imageAlt="Group photo of IEEE members in front of a modern ranch house for a retreat"
				desc="All UT Students are IEEE Guests by default!"
			/>
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="/assets/images/iceskating.jpg"
				graphicAlt="IEEE and IEEE RAS group photo in the middle of an iceskating rink."
			>
				<h2>Open to All</h2>
				<p>
					We believe ideas and passions from different students make
					our org great. Because of this, almost all of our events are{" "}
					<b>free</b> to UT Students! (Just make sure to RSVP)
				</p>
				<div>
					<Button name="Join" link="/join" />
					<Button name="Events" link="/events" />
				</div>
			</TextSection>
			<TextSection
				textSide="right"
				textCols="4"
				graphicSrc="/assets/images/students-row.jpg"
				graphicAlt="IEEE students seated in a classroom row, smiling at the camera"
			>
				<h2>Membership</h2>
				<p>
					If you&apos;d like to get the most out of IEEE, you can pay
					a <b>one-time fee of $10</b> to get national membership. And
					yes, this lasts for your entire time at UT!
				</p>
				<Button name="Learn more" link="/membership" />
			</TextSection>
			<TextSection
				textSide="center"
				textColor="white"
				graphicSrc="/assets/images/backgrounds/BlueGradient.jpg"
			>
				<h2>Perks</h2>
				<p>
					As a member, you have access to so much! Here are just a few
					things...
				</p>
				<div className="flex-col" style={{ gap: "5px" }}>
					<i>Merch Drops</i>
					<i>Resume Reviews</i>
					<i>IMs & Esports</i>
					<i>FamilIEEE System</i>
					<i>Mentorship Program</i>
				</div>

				<Button
					name="Learn more"
					link="/membership#perks"
					type="light"
				/>
			</TextSection>
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="/assets/images/officers-22.jpg"
				graphicAlt="Group photo of IEEE officers of 2022-2023 in front of a classroom whiteboard"
			>
				<h2>Officers and Applications</h2>
				<p>
					Our officers are what make our org function! Meet our
					current officers for the 2023-2024 season and learn about
					how and when to apply!
				</p>
				<Button name="Officers" link="/officers" />
			</TextSection>
		</>
	);
}
