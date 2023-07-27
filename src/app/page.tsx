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
				textCols="5"
				graphicSrc="./assets/images/patrickamogh.jpg"
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
					"./assets/images/pexels-buro-millennial-1438072.jpg",
					"./assets/images/pexels-fox-1595391.jpg",
					"./assets/images/pexels-julia-m-cameron-4144923.jpg",
					"./assets/images/pexels-kampus-production-5940841.jpg",
					"./assets/images/pexels-keira-burton-6146978.jpg"
				]}
			/>
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="./assets/images/halloween.jpg"
			>
				<h2>Important Links</h2>
				<h3>
					<img src="./assets/icons/slack.svg" />
					Slack & <img src="./assets/icons/discord.svg" />
					Discord
				</h3>
				<p>
					Join our Slack and/or Discord to see announcements, events,
					and org updates!
				</p>
				<div>
					<Button name="Join Slack" link="/" />
					<Button
						name="Join Discord"
						link="https://discord.gg/Vcdqz8YczQ"
						newWindow={true}
					/>
				</div>
				<h3>
					<img src="./assets/icons/gcal.svg" />
					Google Calendar
				</h3>
				<p>
					Add our Google Calendar to yours so you can see all of our
					events!
				</p>
				<Button
					name="Add to Google Calendar"
					link="https://calendar.google.com/calendar/u/0?cid=Y183NWNmZGJlZGFjNTY2MGZjOTA2MTRlZTRiNTliNzExOTE0MjU1MGIwYmM5MWJlNTgyNmFiNDBlNzQ4MmQ2YjBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
				/>
				<h3>
					<img src="./assets/icons/instagram.svg" />
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
			</TextSection>
			<TextSection
				textSide="center"
				textColor="white"
				textCols="4"
				graphicSrc="./assets/images/backgrounds/hero-background.jpg"
			>
				<h2>Follow our Socials</h2>
				<p>
					Our socials are a great place to keep up with what and when
					we’re hosting events and making content!
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
