import "./IconList.scss";
import Image from "next/image";

export default function IconList(props: any) {
	const urls: any = {
		discord: "https://discord.gg/mkUxhqu7z5",
		email: "mailto:ieee@ieeeut.org",
		facebook: "https://www.facebook.com/ieeeut/",
		gcal: "https://calendar.google.com/calendar/u/0?cid=Y183NWNmZGJlZGFjNTY2MGZjOTA2MTRlZTRiNTliNzExOTE0MjU1MGIwYmM5MWJlNTgyNmFiNDBlNzQ4MmQ2YjBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
		instagram: "https://www.instagram.com/ieee.ut",
		linkedin: "https://www.linkedin.com/company/ieee-ut-austin",
		tiktok: "https://tiktok.com/@ieee.ut",
		youtube: "https://www.youtube.com/channel/UC0zqc1xWxOr4O7BOr37jKQg",
		slack: "https://join.slack.com/t/ieeeutaustin/signup"
	};

	return (
		<div className="icon-list">
			{props.icons.map((icon: string, index: number) => (
				<a
					key={`icon-${index}`}
					href={urls[icon.replace("-white", "").toLowerCase()] || "#"}
					target="_blank"
				>
					<Image
						src={`/assets/icons/${icon}.svg`}
						alt=""
						width={50}
						height={50}
					/>
				</a>
			))}
		</div>
	);
}
