import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PageSection from "@/components/PageSection";
import Button from "@/components/Button";

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<PageSection>
				<h2>What We Do</h2>
				<p>IEEE runs events for ECE students year-round.</p>
				<p>
					We bring ECE students of all years together to learn from
					each other and build a community within the department
				</p>
				<Button>Learn More</Button>
			</PageSection>
		</div>
	);
}
