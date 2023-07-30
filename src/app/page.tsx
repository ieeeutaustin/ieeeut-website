import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import IconList from "@/components/IconList/IconList";
import GallerySection from "@/components/GallerySection/GallerySection";
import EventsSection from "@/components/EventsSection/EventsSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="/assets/images/Patrickamogh.jpg"
			>
				<h2>What We Do</h2>
				<p>
					IEEE UT runs events, socials, and workshops year round, to
					help you grow academically, socially, and professionally.
				</p>
				<p>
					We mostly consist of ECE students, but all majors are
					welcome!
				</p>
				<Button name="Learn More" link="/about" />
			</TextSection>
			<GallerySection
				images={[
					"/assets/images/DodgeballIM.jpg",
					"/assets/images/Glamping.jpg",
					"/assets/images/JohnDeere.jpg",
					"break",
					"/assets/images/Yoga3.jpg",
					"/assets/images/SoccerIM.jpg"
				]}
			/>
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="/assets/images/Halloween.jpg"
			>
				<h2>Important Links</h2>
				<h3>
					<Image
						src="/assets/icons/slack.svg"
						alt="Slack logo"
						width={50}
						height={50}
					/>
					Slack &{" "}
					<Image
						src="/assets/icons/discord.svg"
						alt="Discord logo"
						width={50}
						height={50}
					/>
					Discord
				</h3>
				<p>
					Join our Slack and/or Discord to see announcements, events,
					and general org updates!
				</p>
				<div>
					<Button
						name="Join Slack"
						link="https://join.slack.com/t/ieeeutaustin/shared_invite/zt-207fi2skh-GQSfBQp3R9h_cAFht1xPQQ"
						newWindow={true}
					/>
					<Button
						name="Join Discord"
						link="https://discord.gg/Vcdqz8YczQ"
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
					Follow us on Instagram, we keep you updated with our events
					and post some fun content on there too!
				</p>
				<Button
					name="Follow Instagram"
					link="https://instagram.com/ieee.ut"
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
					Add our Google Calendar so you can stay up to date with our
					events!
				</p>
				<Button
					name="Add to Google Calendar"
					link="https://calendar.google.com/calendar/u/0?cid=Y183NWNmZGJlZGFjNTY2MGZjOTA2MTRlZTRiNTliNzExOTE0MjU1MGIwYmM5MWJlNTgyNmFiNDBlNzQ4MmQ2YjBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
				/>
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
						"tiktok",
						"linkedin",
						"facebook",
						"youtube"
					]}
				/>
			</TextSection>
			<EventsSection full={false} />
		</>
	);
}
