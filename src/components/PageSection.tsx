import GridContainer from "./GridContainer";
import "./PageSection.scss";

export default function PageSection(props: any) {
	return (
		<GridContainer>
			<div className="page-section">{props.children}</div>
		</GridContainer>
	);
}
