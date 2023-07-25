import "./Button.scss";
import Link from "next/link";

export default function Button(props: any) {
	if (props.member) {
		return (
			<Link className="button member" href="/join">
				<span>
					Become a <span>Member</span>
				</span>
			</Link>
		);
	}

	if (props.sponsor) {
		return (
			<Link className="button sponsor" href="/corporate">
				<span>
					Become a <span>Sponsor</span>
				</span>
			</Link>
		);
	}

	return (
		<Link
			className={"button" + (props.light ? " light" : "")}
			href={props.link || "/"}
			target={props.newWindow ? "_blank" : "_self"}
		>
			{props.children}
		</Link>
	);
}
