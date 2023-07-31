import Image from "next/image";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import TextSection from "@/components/TextSection/TextSection";
import Button from "@/components/Button/Button";
import FlexSection from "@/components/FlexSection/FlexSection";

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
				graphicSrc="/assets/images/Boatparty.jpg"
			>
				<h2>Official Membership</h2>
				<p>
					All of our free events, free merch, and free workshops cost
					a lot for us. That is why, to become an official member with
					additional perks, we ask you for a{" "}
					<b>one-time fee of $10</b>! Swing by our office (EER 0.822)
					if you&apos;re interested!
				</p>
			</TextSection>
			<FlexSection>
				<div>
					<Image
						src="/assets/icons/number-1.svg"
						alt=""
						height={50}
						width={50}
					/>
					<h2>Follow our Socials</h2>
					<p>
						Follow our <a href="/instagram">Instagram</a> and join
						our <a href="/slack">Slack</a>/
						<a href="/discord">Discord</a> to stay in the loop.
					</p>
					<Button name="Links" link="/links" type="light" />
					<Image
						src="/assets/images/Halloween.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color bg-ieee-blue-9" />
				</div>
				<div>
					<Image
						src="/assets/icons/number-2.svg"
						alt=""
						height={50}
						width={50}
					/>
					<h2>Attend Events</h2>
					<p>
						Each semester, our FamilIEEE system creates a fun way to
						meet people and get competitive.
					</p>
					<Button name="Events" link="/events" type="light" />
					<Image
						src="/assets/images/Halloween.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color bg-ieee-blue-8" />
				</div>
				<div>
					<Image
						src="/assets/icons/number-3.svg"
						alt=""
						height={50}
						width={50}
					/>
					<h2>Become Official</h2>
					<p>
						Pay the one-time $10 official member payment in cash by
						stopping by our office! (EER 0.822)
					</p>
					<Button
						name="Perks"
						link="/membership#perks"
						type="light"
					/>
					<Image
						src="/assets/images/Halloween.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color bg-ieee-blue-8" />
				</div>
			</FlexSection>
			<div id="perks">
				<TextSection
					textSide="right"
					textCols="5"
					graphicSrc="/assets/images/JohnDeere.jpg"
				>
					<h2>Perks</h2>
					<p>
						As a member, you have access to so much! Here&apos;s
						just a few...
					</p>
					<h3>Merch</h3>
					<p>
						Get a free t-shirt by becoming a member and get more
						merch by attending meetings!
					</p>
					<h3 id="punch-card">Punch Cards</h3>
					<p>
						Every meeting you attend, you get a punch. With punches,
						you get free stickers, beanies, totes, and sweatshirts!
					</p>
					<h3>Resume Reviews</h3>
					<p>
						We&apos;ll gladly look over you&apos;re resume to help
						you get ready for internships or jobs!
					</p>
					<h3>FamilIEEE System</h3>
					<p>
						Each semester, our FamilIEEE system creates a fun way to
						meet people and get competitive.
					</p>
					<h3>IMs & Esports</h3>
					<p>
						IMs & Esports are a great way to stay engaged
						non-academically!
					</p>
				</TextSection>
			</div>
			<FlexSection>
				<div>
					<h2>Resume Reviews</h2>
					<p>
						We&apos;ll gladly look over you&apos;re resume to help
						you get ready for internships or jobs!
					</p>
					<Button name="Become a Member" link="/" type="light" />
					<Image
						src="/assets/images/Halloween.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color bg-ieee-blue-9" />
				</div>
				<div>
					<h2>FamilIEEE System</h2>
					<p>
						Each semester, our FamilIEEE system creates a fun way to
						meet people and get competitive.
					</p>
					<Button name="Become a Member" link="/" type="light" />
					<Image
						src="/assets/images/Halloween.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color bg-ieee-blue-8" />
				</div>
				<div>
					<h2>IMs & Esports</h2>
					<p>
						IMs & Esports are a great way to stay engaged
						non-academically!
					</p>
					<Button name="Become a Member" link="/" type="light" />
					<Image
						src="/assets/images/Halloween.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color bg-ieee-blue-8" />
				</div>
			</FlexSection>
		</>
	);
}
