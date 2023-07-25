import "./Button.scss";
import Link from "next/link";

export default function Button({
	link,
	name,
	newWindow,
	type,
	children
}: {
	link: string;
	name?: string;
	newWindow?: boolean;
	type?: string;
	children?: any;
}) {
	// if (member) {
	// 	return (
	// 		<Link className="button member" href="/join">
	// 			<span>
	// 				Become a <span>Member</span>
	// 			</span>
	// 		</Link>
	// 	);
	// }

	// if (sponsor) {
	// 	return (
	// 		<Link className="button sponsor" href="/corporate">
	// 			<span>
	// 				Become a <span>Sponsor</span>
	// 			</span>
	// 		</Link>
	// 	);
	// }

	return (
		<Link
			className={"button " + (type ? type.replace("default", "") : "")}
			href={link || "/"}
			target={newWindow ? "_blank" : "_self"}
		>
			{name || children}
		</Link>
	);
}
