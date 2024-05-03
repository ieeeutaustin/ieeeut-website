import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import IconList from "@/components/IconList/IconList";
import GallerySection from "@/components/GallerySection/GallerySection";
import EventsSection from "@/components/EventsSection/EventsSection";
import { getURL } from "@/utils/socials";

export default function Home() {
	return (
		<>
			<HeroSection />
			<TextSection
				textSide="left"
				textCols="3"
				graphicSrc="/assets/images/leadership-retreat.jpg"
				graphicAlt="2 IEEE members in a classroom podium laugh while looking at a laptop"
			>
				<h2>Who are we?</h2>
				<p>
					IEEE UT runs events, socials, and workshops year-round to
					help you grow academically, socially, and professionally.
				</p>
				<p>
					We mainly consist of ECE students, but all majors are
					welcome!
				</p>
				<Button name="Learn More" link="/about" />
			</TextSection>
			<GallerySection
				images={[
					"/assets/images/dodgeball.jpg",
					"/assets/images/glamping.jpg",
					"/assets/images/john-deere.jpg",
					"break",
					"/assets/images/yoga-3.jpg",
					"/assets/images/soccer-22.jpg"
				]}
				alts={[
					"Group photo of IEEE members in uniform on court after a dodgeball game",
					"Group photo of IEEE members in front of a modern ranch house for a retreat",
					"General meeting with John Deere",
					"",
					"IEEE members reaching over their heads in yoga position",
					"Group photo of IEEE soccer intramural players"
				]}
				hideAfter={3}
			/>
			<TextSection
				textSide="right"
				textCols="4"
				graphicSrc="/assets/images/halloween.jpg"
				graphicAlt="IEEE members paint mini pumpkins for halloween social"
			>
				<h2>Important Links</h2>
				<h3>
					<Image
						src="/assets/icons/discord.svg"
						alt="Discord logo"
						width={50}
						height={50}
					/>
					Discord &{" "}
					<Image
						src="/assets/icons/slack.svg"
						alt="Slack logo"
						width={50}
						height={50}
					/>
					Slack
				</h3>
				<p>
					Join our Discord and Slack to see announcements, events, and
					general org updates!
				</p>
				<div>
					<Button
						name="Join Discord"
						link={getURL("discord")}
						newWindow={true}
					/>
					<Button
						name="Join Slack"
						link={getURL("slack")}
						newWindow={true}
					/>
				</div>
				<h3>
					<Image
						src="./assets/icons/instagram.svg"
						alt="Instagram logo"
						width={50}
						height={50}
					/>
					Instagram
				</h3>
				<p>
					Follow us on Instagram; we keep you updated with our events
					and post some fun content on there too!
				</p>
				<Button
					name="Follow Instagram"
					link={getURL("instagram")}
					newWindow={true}
				/>
				<h3>
					<Image
						src="./assets/icons/gcal.svg"
						alt="Google Calendar logo"
						width={50}
						height={50}
					/>
					Google Calendar
				</h3>
				<p>
					Add our Google Calendar so you can stay updated with our
					events!
				</p>
				<Button name="Add to Google Calendar" link={getURL("gcal")} />
			</TextSection>
			<TextSection
				textSide="center"
				textColor="white"
				textCols="4"
				graphicSrc="/assets/images/backgrounds/BlueGradient.jpg"
			>
				<h2>Follow our Socials</h2>
				<p>
					Our socials are a great place to keep up with what and when
					we&apos;re hosting events and making content!
				</p>
				<IconList
					icons={[
						"instagram-white",
						"tiktok-white",
						"linkedin-white",
						"facebook-white",
						"youtube-white"
					]}
				/>
			</TextSection>
			<EventsSection full={false} />
		</>
	);
}

export const revalidate = 300