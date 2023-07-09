import "./IconList.scss";

export default function IconList(props: any) {
	const urls: any = {
		tiktok: "https://tiktok.com/@ieee.ut"
	};

	return (
		<div className="icon-list">
			{props.icons.map((icon: string) => (
				<a
					key={urls}
					href={urls[icon.replace("-white", "")] || "#"}
					target="_blank"
				>
					<img src={`./icons/${icon}.svg`} alt="" />
				</a>
			))}
		</div>
	);
}
