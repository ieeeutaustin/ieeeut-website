import HeaderSection from "@/components/HeaderSection/HeaderSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import FlexSection from "@/components/FlexSection/FlexSection";
import { getURL } from "@/utils/socials";

export const metadata = {
	title: "Membership | IEEE UT",
	description: "Learn about joining and the perks of being in IEEE UT.",
};

export default function Membership() {
	return (
		<>
			<HeaderSection
				title="Membership"
				image="/assets/images/ieee-asme.jpg"
				imageAlt="Large group photo of IEEE and ASME members in Zilker Park."
				desc="Welcome to IEEE! Learn about membership and how to join!"
				button={{
					name: "Member Form",
					link: "/memberform",
					newWindow: false
				}}
			/>
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="https://www.youtube.com/watch?v=T36RKe9FZvE"
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
			<JoinSection memberform={true}/>
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
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="/assets/images/john-deere.jpg"
				graphicAlt="Photo from back of general meeting with John Deere"
				id="perks"
			>
				<h2>Perks</h2>
				<p>
					As a member, you have access to so much! Here are just a
					few things you get along with your <a href="/merch">free member shirt</a>...
				</p>
			</TextSection>
			<PerksSection />
		</>
	);
}

export const PerksSection = () => (
	<FlexSection 
		sections={[
			{
				title: "Resume Reviews",
				desc: "We'll gladly review your resume to help you prepare for internships or jobs!",
				bgImage: "/assets/images/patrick-amogh.jpg",
				bgImageAlt: "2 IEEE members in a classroom podium laugh while looking at a laptop",
				icon: "/assets/icons/resume-white.svg"
			},
			{
				title: "FamilIEEE Systems",
				desc: "Each semester, our FamilIEEE system creates a fun way to meet people and get competitive!",
				bgImage: "/assets/images/familieee.jpg",
				bgImageAlt: "Group photo looks at camera while a member shows their phone's clock to the camera",
				icon: "/assets/icons/members.svg"
			},
			{
				title: "IMs & Esports",
				desc: "IMs & Esports are a great way to stay engaged non-academically!",
				bgImage: "/assets/images/volleyball.jpg",
				bgImageAlt: "Group photo of volleyball intramural team on volleyball court",
				icon: "/assets/icons/volleyball.svg"
			}
		]}
	/>
)

export const JoinSection = ({ memberform = false } : { memberform?: boolean }) => {
	return (
		<div className="join-section">
			<FlexSection sections={[
				{
					title: "Follow our Socials",
					icon: "/assets/icons/number-1.svg",
					desc: 
						<p>
							Follow our <a href={getURL("instagram") || "/"}>Instagram</a>{" "}
							and join our <a href={getURL("discord") || "/"}>Discord</a>/
							<a href={getURL("slack") || "/"}>Slack</a> to stay in the loop.
						</p>
					,
					button: {
						name: "Socials",
						link: "/links",
						type: "light",
					},
					bgImage: "/assets/images/outside-small-group.jpg",
					bgImageAlt: "Members sit in circle on lawn smiling at the camera",
				},
				{
					title: "Attend Events",
					icon: "/assets/icons/number-2.svg",
					desc: "We host all sorts of events every week with free food! RSVP so you don't miss out!",
					button: {
						name: "Events",
						link: "/events",
						type: "light",
					},
					bgImage: "/assets/images/gm.jpg",
					bgImageAlt: "Students focusing on general meeting presenter."
				},
				{
					title: "Become Official",
					icon: "/assets/icons/number-3.svg",
					desc: "Fill out a member form and claim your shirt if you pay your optional dues!",
					button: {
						name: memberform ? "Member Form" : "Membership",
						link: memberform ? getURL("memberform") : "/membership" || "/membership",
						type: "light",
						newWindow: memberform
					},
					bgImage: "/assets/images/game-night.jpg",
					bgImageAlt: "Members cheer and excited in lecture hall"
				}
			]} />
		</div>
	);
}
