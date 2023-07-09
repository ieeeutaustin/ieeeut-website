import GridContainer from "@/components/GridContainer/GridContainer";
import "./PageSection.scss";

export default function PageSection(props: any) {
	return (
		<GridContainer className={"page-section " + props.className}>
			{props.children}
		</GridContainer>
	);
}
