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
	if (!link[0].startsWith("/"))
		return (
			<a
				className={
					"button " + (type ? type.replace("default", "") : "")
				}
				target={newWindow ? "_blank" : "_self"}
				href={link}
				{...props}
			>
				{name || children}
				{icon && (
					<Image
						src={icon}
						alt={`${name} logo`}
						width={50}
						height={50}
					/>
				)}
			</a>
		);

	return (
		<Link
			className={"button " + (type ? type.replace("default", "") : "")}
			target={newWindow ? "_blank" : "_self"}
			href={link}
			{...props}
		>
			{name || children}
			{icon && (
				<Image src={icon} alt={`${name} logo`} width={50} height={50} />
			)}
		</Link>
	);
}
