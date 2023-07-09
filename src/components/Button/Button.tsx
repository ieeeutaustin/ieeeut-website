import "./Button.scss";

export default function Button(props: any) {
	if (props.member) {
		return (
			<a className="button member">
				<span>
					Become a <span>Member</span>
				</span>
			</a>
		);
	}

	if (props.sponsor) {
		return (
			<a className="button sponsor">
				<span>
					Become a <span>Sponsor</span>
				</span>
			</a>
		);
	}

	return (
		<a
			className={"button" + (props.light ? " light" : "")}
			href={props.link}
			target={props.newWindow ? "_blank" : "_self"}
		>
			{props.children}
		</a>
	);
}
