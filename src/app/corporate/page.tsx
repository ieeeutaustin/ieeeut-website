import HeaderSection from "@/components/HeaderSection/HeaderSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";

export const metadata = {
	title: "Corporate | IEEE UT"
};

export default function Corporate() {
	return (
		<>
			<HeaderSection
				title="Corporate"
				image="/assets/images/JohnDeere.jpg"
				desc="Learn more about becoming a sponsor:"
				buttonName="Corporate Packet 2023-2024"
				buttonLink="/assets/files/IEEE-Spring-Corporate-Packet-2023-2024.pdf"
			/>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="/assets/images/Yoga2.jpg"
			>
				<h2>Reach Out</h2>
				<p>
					We&apos;d love to hear for you about sponsoring an event or
					general meeting! They best way to contact us for this is
					through email to our Corporate Director!
				</p>
				<a className="button" href="mailto:corporate@ieeeut.org">
					corporate@ieeeut.org
				</a>
			</TextSection>
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="/assets/images/GREECE.jpg"
			>
				<h2>General Meetings</h2>
				<p>
					We invite companies to talk about what they do and what
					opportunities are available for Electrical Engineers.
					Recruiters are welcome to talk about the application and
					interview process for internship and full-time positions.
					Tech talks are typically 1 hour in length, include food, and
					may feature former UT graduates, a former intern panel,
					and/or videos and slides with information.
				</p>
				<Button name="Learn More" link="/about" />
			</TextSection>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="/assets/images/Halloween.jpg"
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
				graphicSrc="/assets/images/Patrickamogh.jpg"
			>
				<h2>Workshops</h2>
				<p>
					For companies looking to provide more technical insight into
					their work, we host workshops where representatives present
					details about a specific technology that they are working on
					or have worked on in the past. Workshops are a great
					opportunity for employees and recruiters to interact with
					our members and learn about their interests and skills
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
