import HeaderSection from "@/components/HeaderSection/HeaderSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import { getURL } from "@/utils/socials";

export const metadata = {
	title: "Corporate | IEEE UT"
};

export default function Corporate() {
	return (
		<>
			<HeaderSection
				title="Corporate"
				image="/assets/images/ericsson.jpg"
				imageAlt="Photo from the back of a Ericsson general meeting"
				desc="Learn more about becoming a sponsor:"
				buttonName="Corporate Packet 2023-2024"
				buttonLink="/assets/files/IEEE-Spring-Corporate-Packet-2023-2024.pdf"
			/>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="/assets/images/yoga-2.jpg"
				graphicAlt="Dr. Yerraballi talks with a small group of students around him"
			>
				<h2>Reach Out</h2>
				<p>
					We&apos;d love to hear from you about sponsoring an event or
					general meeting! The best way to contact us for this is
					through email to our Corporate Director!
				</p>
				<Button
					name="corporate@ieeeut.org"
					link="mailto:corporate@ieeeut.org"
					icon="/assets/icons/email-white.svg"
					newWindow={true}
				/>
			</TextSection>
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="/assets/images/gm-h-and-h.jpg"
				graphicAlt="Students in general meeting in classroom listen to the presenter"
			>
				<h2>General Meetings</h2>
				<p>
					We invite companies to talk about what they do and what
					opportunities are available for Electrical Engineers.
					Recruiters are welcome to discuss the application and
					interview process for internship and full-time positions.
					Tech talks are typically 1 hour long, include food, and may
					feature former UT graduates, a former intern panel, and/or
					videos and slides with information.
				</p>
				<Button name="Learn More" link="/about" />
			</TextSection>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="/assets/images/optiver-group.jpg"
				graphicAlt="Group photo of IEEE members and Optiver representatives outside on lawn."
			>
				<h2>Social Events</h2>
				<p>
					IEEE is always excited to have corporate sponsors for our
					social events. Sponsored events in the past have been Smash
					Tournament, Fajita Fest, and more. Sponsors have the
					opportunity to send representatives to help coordinate
					activities and talk about their company. They typically
					provide swag or a prize depending on the event.
				</p>
				<Button name="Learn More" link="/about" />
			</TextSection>
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="/assets/images/optiver-chat.jpg"
				graphicAlt="Optiver representative chatting with 2 IEEE members"
			>
				<h2>Workshops</h2>
				<p>
					For companies looking to provide more technical insight into
					their work, we host workshops where representatives present
					details about a specific technology that they are working on
					or have worked on in the past. Workshops are a great
					opportunity for employees and recruiters to interact with
					our members and learn about their interests and skills.
				</p>
				<Button name="Learn More" link="/about" />
			</TextSection>
			<TextSection
				textSide="center"
				textColor="white"
				textCols="4"
				graphicSrc="/assets/images/backgrounds/BlueGradient.jpg"
			>
				<h2>Corporate Packet</h2>
				<p>
					Download our corporate packet to learn about how to become a
					sponsor!
				</p>
				<Button
					name="Corporate Packet 2023-2024"
					link="/assets/files/IEEE-Spring-Corporate-Packet-2023-2024.pdf"
					newWindow={true}
					type="outlined"
				/>
			</TextSection>
		</>
	);
}
