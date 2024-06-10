import "./OfficerCard.scss";
import Image from "next/image";

export type OfficerType = {
	name?: string;
	position: string;
	email: string;
	image?: string;
	imageHover?: string | string[];
};

export default function OfficerCard({ officer }: { officer: OfficerType }) {
	let imageHoverSrc = officer?.imageHover;

	// If ImageHover is an array, choose a random image
	if (Array.isArray(imageHoverSrc)) {
		imageHoverSrc = imageHoverSrc[Math.floor(Math.random() * imageHoverSrc.length)];
	}
	
	return (
		<div className="officer-card">
			<div className="officer-card-content">
				<div className="officer-card-image-wrapper">
					<Image
						className="officer-card-image"
						src={"/assets/images/headshots/" + (officer.image || "default.jpg")}
						alt=""
						width={150}
						height={150}
						style={{objectFit: "cover"}}
					/>
					{imageHoverSrc && (
						<Image
							className="officer-card-image-hover"
							src={"/assets/images/headshots/" + imageHoverSrc}
							alt=""
							width={150}
							height={150}
							style={{objectFit: "cover"}}
							unoptimized={imageHoverSrc.includes(".gif")}
						/>
					)}
				</div>
				<div className="officer-card-text">
					<h3>{officer.name}</h3>
					<i>{officer.position}</i>
					<a href={`mailto:${officer.email}`} target="_blank">
						{officer.email}
					</a>
				</div>
			</div>
		</div>
	);
}
