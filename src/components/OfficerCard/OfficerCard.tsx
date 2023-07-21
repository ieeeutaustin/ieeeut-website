import "./OfficerCard.scss";

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
					<img
						className="officer-card-image"
						src={"/assets/officers/" + props.image}
						alt=""
					/>
					{imageHoverSrc && (
						<img
							className="officer-card-image-hover"
							src={"/assets/officers/" + imageHoverSrc}
							alt=""
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
