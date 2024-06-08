import Image from "next/image";
import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import FlexSection from "@/components/FlexSection/FlexSection";
import Button from "@/components/Button/Button";
import { getShortURL } from "@/database/shortURLs";
import { getURL } from "@/utils/socials";

export const metadata = {
	title: "Join | IEEE UT"
};

export default async function Join() {
	return (
		<>
			<HeaderSection
				title="Join"
				image="/assets/images/leadership-retreat.jpg"
				imageAlt="Group photo of members in park"
				button={{
					name: "Member form",
					link: (await getShortURL("memberform"))?.url || "/memberform",
					newWindow: true
				}}
				desc="Welcome to IEEE UT!"
			/>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="https://www.youtube.com/watch?v=T36RKe9FZvE"
				graphicAlt="YouTube video promoting IEEE UT"
			>
				<h2>Joining is Easy</h2>
				<p>
					As a UT student, you have access to attend all of our events
					for free! (You just need to RSVP before)
				</p>
				<p> You can become an
					official member through a one-time payment of $10. This
					gives you access to a whole lot more stuff!</p>
				<div className="flex gap-3">
					<Button name="Membership" link="/membership" />
					<Button name="Perks" link="/membership#perks" />
				</div>
			</TextSection>
			<JoinSection />
		</>
	);
}

export const JoinSection = (props: any) => {
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
						name: "Member Form",
						link: "/memberform",
						type: "light",
						newWindow: true
					},
					bgImage: "/assets/images/game-night.jpg",
					bgImageAlt: "Members cheer and excited in lecture hall"
				}
			]} />
		</div>
	);
}
