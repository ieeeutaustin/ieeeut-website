import "./Button.scss";
import Link from "next/link";
import Image from "next/image";

export default function Button({
	link,
	name,
	newWindow,
	type,
	children,
	icon,
	...props
}: {
	link: string;
	name?: string;
	newWindow?: boolean;
	type?: string;
	children?: any;
	icon?: string;
	props?: any;
}) {
	if (link[0] != "/")
		return (
			<a
				className={
					"button " + (type ? type.replace("default", "") : "")
				}
				href={link}
				target={newWindow ? "_blank" : "_self"}
				{...props}
			>
				{icon && (
					<Image src={icon} alt="Slack logo" width={50} height={50} />
				)}
				{name || children}
			</a>
		);

	return (
		<Link
			className={"button " + (type ? type.replace("default", "") : "")}
			href={link}
			target={newWindow ? "_blank" : "_self"}
			{...props}
		>
			{icon && (
				<Image src={icon} alt="Slack logo" width={50} height={50} />
			)}
			{name || children}
		</Link>
	);
}
