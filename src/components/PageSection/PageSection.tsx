import "./PageSection.scss";
import GridContainer from "@/components/GridContainer/GridContainer";

export default function PageSection(props: any) {
	return (
		<GridContainer className={"page-section " + props.className}>
			{props.children}
		</GridContainer>
	);
}
