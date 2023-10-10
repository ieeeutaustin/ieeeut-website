import "./HeroSection.scss";
import Image from "next/image";
import GridContainer from "@/components/GridContainer/GridContainer";
import Button from "@/components/Button/Button";
import { getUpcoming } from "@/utils/events";

export default function HeroSection() {
	const upcomingEvent = getUpcoming();

	return (
		<div className="hero-section">
			<GridContainer>
				<div className="hero-content">
					<h1>IEEE UT</h1>
					<i>
						UT Austin&apos;s official chapter of the Institute of
						Electrical and Electronics Engineers and home to the
						largest ECE organization at UT
					</i>
					<div>
						<Button link="/join" type="outlined member">
							Become a <span>Member</span>
						</Button>
						<Button link="/corporate" type="outlined sponsor">
							Become a <span>Sponsor</span>
						</Button>
					</div>
				</div>
				<div className="hero-display">
					<h3>Upcoming Event:</h3>
					<div className="hero-display-img-wrapper">
						<Image
							src={
								upcomingEvent?.image ||
								"/assets/images/branding/ieeeut-logo.jpg"
							}
							alt=""
							fill={true}
							sizes="25vw"
						/>
					</div>
					<Button
						name="RSVP"
						link={upcomingEvent?.url || "/"}
						type="light md px-10"
						newWindow={true}
					/>
				</div>
			</GridContainer>
			<Image
				className="hero-image"
				src="/assets/images/boatparty-22.jpg"
				alt="Group photo of IEEE members on rocky hill island in the middle of a lake."
				fill={true}
				sizes="50vw"
				priority={true}
			/>
			<Image
				className="hero-background"
				src="/assets/images/backgrounds/BlueGradient.jpg"
				alt=""
				fill={true}
				sizes="25vw"
				priority={true}
			/>
		</div>
	);
}
