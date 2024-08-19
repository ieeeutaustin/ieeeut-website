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
				<h2>Joining is Easy</h2>
				<p>
					As a UT student, you have access to attend nearly all of our events and get food
					for free! (Just RSVP before)
				</p>
				<p> You can go from a guest to an official member by paying dues! Swing by <a href="/officehours">office hours</a> to pay dues in cash or online!</p>
				<div className="flex gap-3">
					<Button name="Member Form" link="/memberform" />
					<Button name="Perks" link="/membership#perks" />
				</div>
			</TextSection>
			<TextSection
				textSide="right"
				textCols="4"
				graphicSrc="/assets/images/glamping-2.jpg"
				graphicAlt="Members listening to activity instructions in pairs on field"
			>
				<h2>Types of Members</h2>
				<h3>IEEE Guest</h3>
				<p>
					Being a guest is completely free! As a guest, you get access
					to our free events and free food at those events! (As long as
					you RSVP...)
				</p>
				<h3>IEEE Member</h3>
				<p>
					As a member, you get access to tons of perks listed below! All you need to do is pay dues! Swing by <a href="/officehours">office hours</a> to pay dues in cash or online!
				</p>
			</TextSection>
		</>
	);
}