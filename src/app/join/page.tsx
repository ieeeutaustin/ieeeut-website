import Image from "next/image";
import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import FlexSection from "@/components/FlexSection/FlexSection";
import Button from "@/components/Button/Button";

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
				graphicSrc="/assets/images/Boatparty.jpg"
			>
				<h2>Joining is Easy</h2>
				<p>
					As a UT student, you have access to attend all of our events
					for free! (You just need to RSVP before) You can become an
					official member through a one-time payment of $10. This
					gives you access to a whole lot more stuff!
				</p>
			</TextSection>
			<FlexSection>
				<div>
					<Image
						src="/assets/icons/number-1.svg"
						alt=""
						height={50}
						width={50}
					/>
					<h2>Follow our Socials</h2>
					<p>
						Follow our <a href="/instagram">Instagram</a> and join
						our <a href="/slack">Slack</a>/
						<a href="/discord">Discord</a> to stay in the loop.
					</p>
					<Button name="Links" link="/links" type="light" />
					<Image
						src="/assets/images/Halloween.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color bg-ieee-blue-9" />
				</div>
				<div>
					<Image
						src="/assets/icons/number-2.svg"
						alt=""
						height={50}
						width={50}
					/>
					<h2>Attend Events</h2>
					<p>
						Each semester, our FamilIEEE system creates a fun way to
						meet people and get competitive.
					</p>
					<Button name="Events" link="/events" type="light" />
					<Image
						src="/assets/images/Halloween.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color bg-ieee-blue-8" />
				</div>
				<div>
					<Image
						src="/assets/icons/number-3.svg"
						alt=""
						height={50}
						width={50}
					/>
					<h2>Become Official</h2>
					<p>
						Pay the one-time $10 official member payment in cash by
						stopping by our office! (EER 0.822)
					</p>
					<Button
						name="Perks"
						link="/membership#perks"
						type="light"
					/>
					<Image
						src="/assets/images/Halloween.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color bg-ieee-blue-8" />
				</div>
			</FlexSection>
		</>
	);
}
