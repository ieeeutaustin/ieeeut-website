import "./GridContainer.scss";

export default function GridContainer(props: any) {
	return (
		<div
			className={
				props.className
					? `grid-container ${props.className} `
					: "grid-container"
			}
		>
			{props.children}
		</div>
	);
}
