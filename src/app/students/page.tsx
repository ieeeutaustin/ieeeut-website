import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import OfficerSection from "@/components/OfficersSection/OfficerSection";
import Button from "@/components/Button/Button";

export const metadata = {
	title: "Students"
};

export default function Students() {
	return (
		<>
			<HeaderSection
				title="Students"
				image="./assets/images/events.JPG"
			/>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="./assets/images/yoga.JPG"
			>
				<h2>Open to All</h2>
				<p>
					Our org believes experiences, ideas, and strengths from
					different students make our community strong. We encourage
					students of all majors to join IEEE!
				</p>
				<Button name="Join" link="/join" />
			</TextSection>
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="./assets/images/merch.JPG"
			>
				<h2>Custom Merch</h2>
				<p>
					As a member, you can get some of our free merch! You can
					also get more pieces by filling out your punch card.
				</p>
				<Button name="Merch" link="/merch" />
			</TextSection>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="./assets/images/officers/Group.png"
			>
				<h2>Become an Officer</h2>
				<p>
					Our officers are what make our org function! Meet our
					current officers for the 2023-2024 season and learn about
					applying as an assistant officer!
				</p>
				<Button name="Officers" link="/officers" />
			</TextSection>
		</>
	);
}
