import { getLinks } from "../../utils/socials";
import LinksSection from "@/components/LinksSection/LinksSection";

export const metadata = {
	title: "Links | IEEE UT",
	description: "Check out some IEEE UT links to social media and other resources."
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
