import { getLinks } from "../../utils/socials";
import LinksSection from "@/components/LinksSection/LinksSection";

export const metadata = {
	title: "Links | IEEE UT"
};

export default function Links() {
	const linkValues = Object.values(getLinks());

	return (
		<div>
			<LinksSection links={linkValues} />
		</div>
	);
}
