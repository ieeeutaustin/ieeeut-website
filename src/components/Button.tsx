import "./Button.scss";

export default function Button(props: any) {
	if (props.member) {
		return (
			<button className="button-member">
				<span>
					Become a <span>Member</span>
				</span>
			</button>
		);
	}

	if (props.sponsor) {
		return (
			<button className="button-sponsor">
				<span>
					Become a <span>Sponsor</span>
				</span>
			</button>
		);
	}

	if (props.outline) {
	}

	return <button>{props.children}</button>;
}
