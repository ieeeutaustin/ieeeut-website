import "./HeroSection.scss";
import Image from "next/image";
import GridContainer from "@/components/GridContainer/GridContainer";
import Button from "@/components/Button/Button";

export default function HeroSection() {
	return (
		<GridContainer>
			<div className="hero-section">
				<div className="hero-content">
					<h1>IEEE UT</h1>
					<i>
						UT Austin’s official chapter of the Institute of
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
			</div>
			<div className="hero-display">
				<h3>Upcoming Event:</h3>
				<Image
					src="/assets/images/flyers/pease_park.jpg"
					alt=""
					width={150}
					height={150}
				/>
				<Button
					name="RSVP"
					link="https://www.instagram.com/p/CrMBlZNu7HS/"
					type="light md px-10"
					newWindow={true}
				/>
			</div>
			<Image
				className="hero-image"
				src="/assets/images/Boatparty.png"
				alt=""
				width={450}
				height={350}
			/>
			<Image
				className="hero-background"
				src="/assets/images/backgrounds/BlueGradient.png"
				alt=""
				width={50}
				height={50}
			/>
		</GridContainer>
	);
}
