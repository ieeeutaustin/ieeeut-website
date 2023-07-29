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
