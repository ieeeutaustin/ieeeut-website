import HeaderSection from "@/components/HeaderSection/HeaderSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";

export const metadata = {
	title: "Membership | IEEE UT"
};

export default function Membership() {
	return (
		<>
			<HeaderSection
				title="Membership"
				image="/assets/images/Events.jpg"
			/>
			<TextSection
				textSide="left"
				textCols="5"
				graphicSrc="/assets/images/Boatparty.png"
			>
				<h2>One-Time Fee</h2>
				<p>
					All of our free events, free merch, and free workshops cost
					a lot for us. That is why, to become an official member, it
					only costs a one time fee of $10!
				</p>
				<Button name="Instagram" link="/instagram" />
			</TextSection>
			<TextSection
				textSide="right"
				textCols="5"
				graphicSrc="/assets/images/Boatparty.png"
			>
				<h2 id="punch-card">Punch Card</h2>
				<p>
					All of our free events, free merch, and free workshops cost
					a lot for us. That is why, to become an official member, it
					only costs a one time fee of $10!
				</p>
			</TextSection>
		</>
	);
}
