import "./OfficerCard.scss";
import Image from "next/image";

export default function OfficerCard(props: any) {
	let imageHoverSrc = props.imageHover;

	// Random hover image
	if (imageHoverSrc && Array.isArray(imageHoverSrc)) {
		const randIndex = Math.floor(Math.random() * imageHoverSrc.length);
		imageHoverSrc = imageHoverSrc[randIndex];
	}

	return (
		<div className="officer-card">
			<div className="officer-card-content">
				<div className="officer-card-image-wrapper">
					<Image
						className="officer-card-image"
						src={"/assets/images/headshots/" + props.image}
						alt=""
						width={150}
						height={150}
					/>
					{imageHoverSrc && (
						<Image
							className="officer-card-image-hover"
							src={"/assets/images/headshots/" + imageHoverSrc}
							alt=""
							width={150}
							height={150}
						/>
					)}
				</div>
				<div className="officer-card-text">
					<h3>{props.name}</h3>
					<i>{props.position}</i>
					<a href={`mailto:${props.email}`} target="_blank">
						{props.email}
					</a>
				</div>
			</div>
		</div>
	);
}
