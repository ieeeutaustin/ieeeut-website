import "./LinksSection.scss";
import Image from "next/image";
import Button from "../Button/Button";
import { LinkType } from "@/app/links/page";

export default function LinksSection({ links }: { links: LinkType[] }) {
	return (
		<div className="links-section">
			<div className="links-section-content">
				<h2>IEEE UT Links</h2>
				<div className="links-section-links">
					{links.map((link) => (
						<Button
							key={link.name}
							name={link.name}
							link={link.url}
							newWindow={true}
							icon={link.icon || ""}
							type="light"
						/>
					))}
				</div>
			</div>
			<Image
				className="links-section-bg-img"
				src="/assets/images/backgrounds/BlueGradient.jpg"
				alt=""
				fill
			/>
		</div>
	);
}
