import "./JoinSection.scss";
import Image from "next/image";
import FlexSection from "../FlexSection/FlexSection";
import Button from "../Button/Button";

export default function JoinSection(props: any) {
	return (
		<div className="join-section">			
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
						src="/assets/images/Retreat.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color" />
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
						We host all sorts of events every week with free food! RSVP so you don&apos;t miss out!
					</p>
					<Button name="Events" link="/events" type="light" />
					<Image
						src="/assets/images/Glamping.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color" />
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
						src="/assets/images/Patrickamogh.jpg"
						alt=""
						fill={true}
						quality={50}
					/>
					<div className="background-color" />
				</div>
			</FlexSection>
		</div>
	);
}
