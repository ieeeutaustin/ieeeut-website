import "./HeaderSection.scss";
import Image from "next/image";
import GridContainer from "@/components/GridContainer/GridContainer";
import Button, { ButtonType} from "../Button/Button";

export interface HeaderSectionType {
	title: string;
	desc?: string;
	image?: string;
	imageAlt?: string;
	imageStyle?: any;
	button?: ButtonType;
	children?: any;
}

export default function HeaderSection(header: HeaderSectionType) {
	return (
		<GridContainer>
			<div className="header-section">
				<div className="header-content">
					<h1>{header.title}</h1>
					{header.desc ? <p>{header.desc}</p> : ""}
					{header.button?.name ? (
						<Button
							name={header.button?.name}
							link={header.button.link || "/"}
							type="outlined"
							newWindow={
								header.button.newWindow == undefined
									? true
									: header.button.newWindow
							}
						/>
					) : (
						""
					)}
					{header.children}
				</div>
			</div>
			{header.image && (
				<Image
					className="header-image"
					src={header.image}
					alt={header.imageAlt || ""}
					style={header.imageStyle}
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
