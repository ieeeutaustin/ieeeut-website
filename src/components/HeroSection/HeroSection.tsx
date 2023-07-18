import "./HeroSection.scss";
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
						<Button member="true" />
						<Button sponsor="true" />
					</div>
				</div>
			</div>
			<img
				className="hero-side-image"
				src="/assets/flyers/Cookies.png"
				alt=""
			/>
			<img className="hero-image" src="./hero-image.jpg" alt="" />
			<img
				className="hero-background"
				src="./hero-background.jpg"
				alt=""
			/>
		</GridContainer>
	);
}
