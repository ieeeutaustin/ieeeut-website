import "./OfficerSection.scss";
import OfficerCard from "../OfficerCard/OfficerCard";
import { getOfficers } from "@/utils/officers";

export default function OfficerSection() {

	const officers = getOfficers();

	return (
		<div className="officer-section">
			<div className="officer-container">
				{officers.map((officer, index: number) => (
					<OfficerCard key={index} officer={officer} />
				))}
			</div>
		</div>
	);
}
