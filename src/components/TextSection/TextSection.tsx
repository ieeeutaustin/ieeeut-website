import Image from "next/image";
import GridContainer from "@/components/GridContainer/GridContainer";
import "./TextSection.scss";

export default function TextSection({
	children,
	textSide,
	textCols,
	textColor,
	graphicSrc,
	graphicAlt
}: {
	children: any,
	textSide: string,
	textCols?: string,
	textColor?: string,
	graphicSrc?: string,
	graphicAlt?: string
}) {
	return (
		<div className={"text-section " + textSide + (textCols ? ` cols-${textCols}` : " cols-5")}>
			<GridContainer>
				{graphicSrc && (
					<div className="text-section-graphic">
						{
							graphicSrc.includes(".mp4") ? (
								<video autoPlay={true} muted={true} loop={true}>
									<source src={graphicSrc} type="video/mp4" />
								</video>
							) : (
								<Image src={graphicSrc} alt={graphicAlt || ""} width={400} height={300}/>
							)
						}
					</div>
				)}
				<div className={"text-section-content " + (textColor || "")}>
					{children}
				</div>
			</GridContainer>
		</div>
	);
}
