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
				image="/assets/images/Events.jpg"
				desc="Learn about what IEEE offers to UT Students"
			/>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="/assets/images/Iceskating.jpg"
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
				textCols="5"
				graphicSrc="/assets/images/Yoga.jpg"
			>
				<h2>Membership</h2>
				<p>
					If you&apos;d like to get the most out of IEEE, you can pay
					a <b>one time fee of $10</b> to get national membership. And
					yes, this lasts for your entire time at UT!
				</p>
				<Button name="Learn more" link="/membership" />
			</TextSection>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="/assets/images/Merch.jpg"
			>
				<h2>Perks</h2>
				<p>
					As a member, you have access to so much stuff! Here&apos;s
					just a few...
					<ul className="my-2">
						<li>
							<p>Merch Drops</p>
						</li>
						<li>
							<p>Resume Reviews</p>
						</li>
						<li>
							<p>IMs & Esports</p>
						</li>
						<li>
							<p>FamilIEEE System</p>
						</li>
						<li>
							<p>Mentorship Program</p>
						</li>
					</ul>
				</p>
				<Button name="Learn more" link="/membership#perks" />
			</TextSection>
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="/assets/images/officers/Group.jpg"
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
