import Image from "next/image";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import FlexSection from "@/components/FlexSection/FlexSection";
import JoinSection from "@/components/JoinSection/JoinSection";

export const metadata = {
	title: "Membership | IEEE UT"
};

export default function Membership() {
	return (
		<>
			<HeaderSection
				title="Membership"
				image="/assets/images/ieee-asme.jpg"
				imageAlt="Large group photo of IEEE and ASME members in Zilker Park."
				desc="Learn about what IEEE offers!"
				buttonLink="/join"
				buttonName="Join IEEE UT"
				buttonNewWindow={false}
			/>
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="/assets/images/boatparty-21.jpg"
				graphicAlt="Group photo if IEEE members on a 2 story boat."
			>
				<h2>Become a Member</h2>
				<p>
					All of our free events, free merch, and free workshops cost
					a lot for us. That is why, to become an official member with
					additional perks, we ask you for a{" "}
					<b>one-time fee of $10</b>! Swing by our office (EER 0.822)
					if you&apos;re interested!
				</p>
				<Button name="Join IEEE" link="/join" />
			</TextSection>
			<TextSection
				textSide="right"
				textCols="4"
				graphicSrc="/assets/images/glamping-2.jpg"
				graphicAlt="Members listening to activity instructions in pairs on field"
			>
				<h2>IEEE Guest</h2>
				<p>
					To be a guest is completely free! As a guest, you get access
					to free events and free food at those events! (As long as
					you RSVP...)
				</p>
				<h2>IEEE Member</h2>
				<p>
					As a member, you get access to tons of perks listed below!
					All of this comes at a one-time cost of $10. And no, your
					member status will never expire!
				</p>
				<Button name="Join IEEE" link="/join" />
			</TextSection>
			<div id="perks">
				<TextSection
					textSide="left"
					textCols="4"
					graphicSrc="/assets/images/john-deere.jpg"
					graphicAlt="Photo from back of general meeting with John Deere"
				>
					<h2>Perks</h2>
					<p>
						As a member, you have access to so much! Here are just a
						few...
					</p>
					<h3>Merch</h3>
					<p>
						Each official member gets an org t-shirt for free! You
						can also get more merch by attending events and filling
						out your punch card described below!
					</p>
				</TextSection>
			</div>
			<FlexSection>
				<div>
					<h2>Resume Reviews</h2>
					<p>
						We&apos;ll gladly review your resume to help you prepare
						for internships or jobs!
					</p>
					<Button name="Become a Member" link="/" type="light" />
					<Image
						src="/assets/images/patrick-amogh.jpg"
						alt="2 IEEE members in a classroom podium laugh while looking at a laptop"
						fill={true}
						quality={50}
					/>
					<div className="background-color" />
				</div>
				<div>
					<h2>FamilIEEE System</h2>
					<p>
						Each semester, our FamilIEEE system creates a fun way to
						meet people and get competitive.
					</p>
					<Button name="Become a Member" link="/" type="light" />
					<Image
						src="/assets/images/familieee.jpg"
						alt="Group photo looks at camera while a member shows their phone's clock to the camera"
						fill={true}
						quality={50}
					/>
					<div className="background-color" />
				</div>
				<div>
					<h2>IMs & Esports</h2>
					<p>
						IMs & Esports are a great way to stay engaged
						non-academically!
					</p>
					<Button name="Become a Member" link="/" type="light" />
					<Image
						src="/assets/images/volleyball.jpg"
						alt="Group photo of volleyball intramural team on volleyball court"
						fill={true}
						quality={50}
					/>
					<div className="background-color" />
				</div>
			</FlexSection>
		</>
	);
}
