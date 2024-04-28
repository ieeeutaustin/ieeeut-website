import Link from "next/link";
import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import Button from "@/components/Button/Button";
import { getURL } from "@/utils/socials";

export const metadata = {
	title: "Merch | IEEE UT"
};

export default function Merch() {
	return (
		<>
			<HeaderSection
				title="Merch"
				image="/assets/images/merch-2.jpg"
				imageAlt="Members in IEEE merch sitting down, laughing and talking to one another"
			/>
			<TextSection
				textSide="left"
				textCols="4"
				graphicSrc="/assets/videos/MerchVideo.mp4"
				graphicAlt="IEEE merch video/promo"
			>
				<h2>Our Merch</h2>
				<p>
					Take a look at out merch! We design new merch each year so
					follow us on{" "}
					<Link href={getURL("instagram")}>Instagram</Link> to stay
					updated.
				</p>
				<p>
					We also have things like sweatshirts, stickers, totes, and
					beanies!
				</p>
				<Button name="Instagram" link={getURL("instagram")} />
			</TextSection>
			<TextSection
				textSide="right"
				textCols="4"
				graphicSrc="/assets/images/merch.jpg"
				graphicAlt="Members in IEEE merch crouch and sit in the middle of path smiling and talking"
			>
				<h2>Free Member Merch</h2>
				<p>
					All of our confirmed members get a free member t-shirt! Each
					year we try to come up with a new design.
				</p>
				<p>
					You can also get a sweatshirt, tote bag, beanie, and
					stickers by attending our meetings and filling out your{" "}
					<Link href={"/membership#punch-card"}>punch card</Link>!
				</p>
				<Button name="Become a Member" link="/membership" />
			</TextSection>
		</>
	);
}
