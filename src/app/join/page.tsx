import Image from "next/image";
import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import FlexSection from "@/components/FlexSection/FlexSection";
import Button from "@/components/Button/Button";
import JoinSection from "@/components/JoinSection/JoinSection";

export const metadata = {
	title: "Join | IEEE UT"
};

export default function Join() {
	return (
		<>
			<HeaderSection
				title="Join"
				image="/assets/images/Retreat.jpg"
				desc="Welcome to IEEE UT!"
			/>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="https://www.youtube.com/watch?v=T36RKe9FZvE"
			>
				<h2>Joining is Easy</h2>
				<p>
					As a UT student, you have access to attend all of our events
					for free! (You just need to RSVP before) You can become an
					official member through a one-time payment of $10. This
					gives you access to a whole lot more stuff!
				</p>
				<p>
					Learn more about membership and member perks!
				</p>
				<div>
					<Button name="Membership" link="/membership"/>
					<Button name="Perks" link="/membership#perks"/>
				</div>
			</TextSection>
			<JoinSection/>
		</>
	);
}
