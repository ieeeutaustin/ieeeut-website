import { getLinks } from "../../utils/socials";
import LinksSection from "@/components/LinksSection/LinksSection";

export const metadata = {
	title: "Links | IEEE UT"
};

export type LinkType = {
	name: "string",
	url: "string",
	icon?: "string"
};

export default function Links() {
	const links: LinkType[] = Object.values(getLinks());

	return (
		<div>
			<LinksSection links={links} />
		</div>
	);
}
