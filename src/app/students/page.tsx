import Link from "next/link";
import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import Button from "@/components/Button/Button";
import { PerksSection } from "../membership/page";

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
				button={{
					name: "Join IEEE",
					link: "/membership",
					newWindow: false
				}}
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
					<b>free</b> to UT students! (Just make sure to RSVP)
				</p>
				<div className="flex gap-3">
					<Button name="Join IEEE" link="/membership" />
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
					a dues! This gives you access to a whole lot more stuff!
				</p>
				<Button name="Membership" link="/membership" />
			</TextSection>
			<PerksSection />
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="/assets/images/officers-22.jpg"
				graphicAlt="Group photo of IEEE officers of 2022-2023 in front of a classroom whiteboard"
			>
				<h2>Officers & Applications</h2>
				<p>
					Our officers are what make our org function! We recruit assistant officers during the fall semester and officers during the spring semester.
				</p>
				<p>
					Meet our current officer team and learn about
					how and when to apply!
				</p>
				<Button name="Officers" link="/officers" />
			</TextSection>
			<TextSection
				textSide="right"
				textCols="4"
				graphicSrc="/assets/images/merch.jpg"
				graphicAlt="IEEE students seated in a classroom row, smiling at the camera"
			>
				<h2>Merch</h2>
				<p>
					For the year you pay dues, you&apos;ll get a <strong>free member shirt</strong>! Swing by the office during <a href="/officehours">office hours</a> to pick it up!
				</p>
				<p>
					We also have other merch available for purchase! This includes sweaters, shirts, and more to come!
				</p>
				<Button name="Merch" link="/merch" />
			</TextSection>
		</>
	);
}
