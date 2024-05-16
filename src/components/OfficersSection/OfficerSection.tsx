import "./OfficerSection.scss";
import OfficerCard from "../OfficerCard/OfficerCard";

import { getOfficers } from "@/utils/officers";

export default function OfficerSection(props: any) {

	const officers = getOfficers();

	return (
		<div className="officer-section">
			<div className="officer-container">
				{officers.map((officer: any, index: number) => (
					<OfficerCard key={index} {...officer} />
				))}
			</div>
		</div>
	);
}
