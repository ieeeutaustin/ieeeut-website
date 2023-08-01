import "./HeroSection.scss";
import Image from "next/image";
import GridContainer from "@/components/GridContainer/GridContainer";
import Button from "@/components/Button/Button";

export default function HeroSection() {
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
							src="/assets/images/flyers/pease_park.jpg"
							alt=""
							fill={true}
							sizes="25vw"
						/>
					</div>
					<Button
						name="RSVP"
						link="https://www.instagram.com/p/CrMBlZNu7HS/"
						type="light md px-10"
						newWindow={true}
					/>
				</div>
			</GridContainer>
			<Image
				className="hero-image"
				src="/assets/images/Boatparty.jpg"
				alt=""
				fill={true}
				sizes="50vw"
				priority
			/>
			<Image
				className="hero-background"
				src="/assets/images/backgrounds/BlueGradient.jpg"
				alt=""
				fill={true}
				sizes="25vw"
				priority
			/>
		</div>
	);
}
