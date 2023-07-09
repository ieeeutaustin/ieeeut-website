import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import FlexSection from "@/components/FlexSection/FlexSection";
import IconList from "@/components/IconList/IconList";
import Footer from "@/components/Footer/Footer";
import GallerySection from "@/components/GallerySection/GallerySection";
import EventsSection from "@/components/EventsSection/EventsSection";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="./patrickamogh.jpg"
			>
				<h2>What We Do</h2>
				<p>IEEE runs events for ECE students year-round.</p>
				<p>
					We bring ECE students of all years together to learn from
					each other and build a community within the department
				</p>
				<Button>Learn More</Button>
			</TextSection>
			<GallerySection
				images={[
					"./assets/pexels-buro-millennial-1438072.jpg",
					"./assets/pexels-fox-1595391.jpg",
					"./assets/pexels-julia-m-cameron-4144923.jpg",
					"./assets/pexels-kampus-production-5940841.jpg",
					"./assets/pexels-keira-burton-6146978.jpg"
				]}
			/>
			{/* <FlexSection>
				<div>
					<img src="./icons/members.svg" alt="" />
					<h1>400+</h1>
					<h2>Members</h2>
					<p>
						We bring ECE students of all years together to learn
						from each other and build a community within the
						department
					</p>
					<Button light={true}>Become a Member</Button>
					<img src="./halloween.jpg" alt="" />
					<div className="background-color bg-ieee-blue" />
				</div>
				<div>
					<img src="./icons/corporate.svg" alt="" />
					<h1>15+</h1>
					<h2>Corporate Events</h2>
					<p>
						IEEE welcomed over 15 companies to speak to our members
						about their jobs, opportunities, and insights on the
						future of electrical engineering and technology.
					</p>
					<Button light={true}>Become a Sponsor</Button>
					<img src="./halloween.jpg" alt="" />
					<div className="background-color bg-ieee-blue-9" />
				</div>
				<div>
					<img src="./icons/officers.svg" alt="" />
					<h1>10</h1>
					<h2>Officers</h2>
					<p>
						The IEEE officer team works hard to bring fun, engaging
						events to our members year-round, and we accept new
						officers every fall!
					</p>
					<Button light={true}>Meet the Officers</Button>
					<img src="./halloween.jpg" alt="" />
					<div className="background-color bg-ieee-blue-8" />
				</div>
			</FlexSection> */}
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="./halloween.jpg"
			>
				<h2>Important Links</h2>
				<h3>
					<img src="./icons/slack.svg" />
					Slack & <img src="./icons/discord.svg" />
					Discord
				</h3>
				<p>
					Join our Slack and/or Discord to see announcements, events,
					and org updates!
				</p>
				<div>
					<Button>Join Slack</Button>
					<Button
						link="https://discord.gg/Vcdqz8YczQ"
						newWindow={true}
					>
						Join Discord
					</Button>
				</div>
				<h3>
					<img src="./icons/gcal.svg" />
					Google Calendar
				</h3>
				<p>
					Add our Google Calendar to yours so you can see all of our
					events!
				</p>
				<Button>Add to Google Calendar</Button>
				<h3>
					<img src="./icons/instagram.svg" />
					Instagram
				</h3>
				<p>
					Follow us on Instagram, we keep you updated with our events
					and post some fun content on there too!
				</p>
				<Button link="https://instagram.com/ieee.ut" newWindow={true}>
					Follow Instagram
				</Button>
			</TextSection>
			<TextSection
				textSide="center"
				textColor="white"
				textCols="4"
				graphicSrc="./hero-background.jpg"
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
			{/* <TextSection textSide="left" graphicSrc="./patrickamogh.jpg">
				<h2>Get Involved</h2>
				<h3>Upcoming Events</h3>
				<p>
					Check out our calendar to see general meeting timing and
					location and find out about other cool events!
				</p>
				<h3>Intramural Sports</h3>
				<p>
					IEEE plays in many intramural sports! Join our slack to see
					what sports we are making teams for!
				</p>
				<h3>Membership</h3>
				<p>
					Official membership with IEEE requires signing up on our
					Slack workspace and completing our membership portal.
				</p>
			</TextSection> */}
			<EventsSection />
			<Footer />
		</>
	);
}
