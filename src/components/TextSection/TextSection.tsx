import PageSection from "@/components/PageSection/PageSection";
import GridContainer from "@/components/GridContainer/GridContainer";
import "./TextSection.scss";

export default function TextSection({
	children,
	textSide,
	textCols,
	textColor,
	graphicSrc,
	graphicAlt
}: any) {
	return (
		<GridContainer
			className={
				"text-section " +
				textSide +
				(textCols ? ` cols-${textCols}` : " cols-5")
			}
		>
			<div className={textColor}>{children}</div>
			{graphicSrc ? <img src={graphicSrc} alt={graphicAlt} /> : ""}
		</GridContainer>
	);
}
