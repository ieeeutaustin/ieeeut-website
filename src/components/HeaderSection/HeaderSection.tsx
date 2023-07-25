import Link from "next/link";
import "./HeaderSection.scss";
import GridContainer from "@/components/GridContainer/GridContainer";

export default function HeaderSection(props: {
	title: string;
	desc?: string;
	image: string;
	imageStyle?: any;
	buttonName?: string;
	buttonLink?: string;
	children?: any;
}) {
	return (
		<GridContainer>
			<div className="header-section">
				<div className="header-content">
					<h1>{props.title}</h1>
					{props.desc ? <p>{props.desc}</p> : ""}
					{props.buttonName ? (
						<Link
							className="header-button"
							href={props.buttonLink || ""}
							target="_blank"
						>
							{props.buttonName}
						</Link>
					) : (
						""
					)}
					{props.children}
				</div>
			</div>
			<img
				className="header-image"
				src={props.image}
				alt=""
				style={props.imageStyle}
			/>
			<img
				className="header-background"
				src="./hero-background.jpg"
				alt=""
			/>
		</GridContainer>
	);
}
