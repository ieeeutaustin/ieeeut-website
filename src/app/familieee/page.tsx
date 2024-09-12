import HeaderSection from "@/components/HeaderSection/HeaderSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";

export const metadata = {
	title: "FamilIEEE | IEEE UT",
	description: "Learn about joining and the perks of being in IEEE UT.",
};

export default function Familieee() {
	return (
		<>
			<HeaderSection
				title="FamilIEEE"
				image="/assets/images/familieee.jpg"
				imageAlt="Group selfie of familIEEE members"
				desc="Learn about our FamilIEEE system and how to join!"
				button={{
					name: "Fam Leaderboard",
					link: "/familieee/leaderboard",
					newWindow: false
				}}
			/>
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="/assets/images/familieee.jpg"
				graphicAlt="YouTube video promoting IEEE UT"
				id="join"
			>
				<h2>What are Famil(IEEE)s?</h2>
				<p>
					FamilIEEEs are small teams of IEEE members that compete in various events and challenges throughout the semester. The goal is to get to know your team, have fun, and come out on top at the end of the semester. FamilIEEEs are a great way to get involved in IEEE and meet new people!
				</p>
			</TextSection>
			<TextSection
				textSide="right"
				textCols="4"
				graphicSrc="/assets/images/leadership-retreat.jpg"
				graphicAlt="YouTube video promoting IEEE UT"
				id="join"
			>
				<h2>Interested in joining?</h2>
				<p>
					Joining is easy! If school is in session, we&apos;ve likely already started fams, so feel free to join! Head over the to our Discord and send a message to the general channel or to an officer!
				</p>
				<Button
					name="Join our Discord"
					link="/discord"
					icon="/assets/icons/discord-white.svg"
					newWindow={true}
				/>
			</TextSection>
		</>
	);
}