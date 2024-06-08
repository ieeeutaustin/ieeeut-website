import "./HeaderSection.scss";
import Image from "next/image";
import GridContainer from "@/components/GridContainer/GridContainer";
import Button, { ButtonType } from "../Button/Button";

export default function HeaderSection(props: {
	title: string;
	desc?: string;
	image?: string;
	imageAlt?: string;
	imageStyle?: any;
	button?: ButtonType;
	children?: any;
}) {
	return (
		<GridContainer>
			<div className="header-section">
				<div className="header-content">
					<h1>{props.title}</h1>
					{props.desc ? <p>{props.desc}</p> : ""}
					{props.button?.name ? (
						<Button
							name={props.button?.name}
							link={props.button.link || "/"}
							type="outlined"
							newWindow={
								props.button.newWindow == undefined
									? true
									: props.button.newWindow
							}
						/>
					) : (
						""
					)}
					{props.children}
				</div>
			</div>
			{props.image && (
				<Image
					className="header-image"
					src={props.image}
					alt={props.imageAlt || ""}
					style={props.imageStyle}
					width={200}
					height={200}
					priority={true}
				/>
			)}

			<Image
				className="header-background"
				src="/assets/images/backgrounds/BlueGradient.jpg"
				alt=""
				width={50}
				height={50}
				priority={true}
			/>
		</GridContainer>
	);
}
