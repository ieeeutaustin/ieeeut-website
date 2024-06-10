import Image from "next/image";
import HeroSection from "@/components/HeroSection/HeroSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import GallerySection from "@/components/GallerySection/GallerySection";
import EventsSection from "@/components/EventsSection/EventsSection";
import { getURL } from "@/utils/socials";
import FlexSection from "@/components/FlexSection/FlexSection";
import { JoinSection } from "./membership/page";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FlexSection
				sections={[
					{
						title: "Weekly Events",
						icon: "/assets/icons/calendar-white.svg",
						desc: <p>Year-round events, socials, and workshops with catered food! All for <strong>free</strong> when you RSVP!</p>,
						bgImage: "/assets/images/f23-casino-night.jpg",
					},
					{
						title: "Community & Networking",
						icon: "/assets/icons/group-white.svg",
						desc: "Meet students, professors, and recruiters for both casual and professional networking!",
						bgImage: "/assets/images/optiver-chat.jpg",
					},
					{
						title: "Academic Support",
						icon: "/assets/icons/academic-white.svg",
						desc: "Get help from upperclassman and other students! We know ECE is tough, so we're here to help!",
						bgImage: "/assets/images/patrick-amogh.jpg",
					}
				]}
			/>
			<TextSection
				textSide="left"
				textCols="3"
				graphicSrc="/assets/images/leadership-retreat.jpg"
				graphicAlt="2 IEEE members in a classroom podium laugh while looking at a laptop"
			>
				<h2>A little about us...</h2>
				<p>
					Our goal is to provide a community for ECE students to connect, making engineering/college a little less daunting!
				</p>
				<p>
					Almost all of our events are free (when you RSVP), and we provide food at most of them!
				</p>
				<i>
					We are not mainly project-based; however, if you are interested in robotics, <a href="https://ras.ece.utexas.edu" target="_blank">IEEE RAS</a> is!
				</i>
				<Button name="Learn more" link="/about" />
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
				<div className="flex flex-col gap-[10px]">
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
					<div className="flex gap-[10px] mt-2">
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
				</div>
				<div className="flex flex-col gap-[10px]">
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
					<div className="flex gap-[10px] mt-2">
						<Button
							name="Follow Instagram"
							link={getURL("instagram")}
							newWindow={true}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-[10px]">
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
					<div className="flex gap-[10px] mt-2">
						<Button name="Add to Google Calendar" link={getURL("gcal")} />
					</div>
				</div>
			</TextSection>
			<JoinSection />
			<EventsSection full={false} />
		</>
	);
}

export const revalidate = 3600;