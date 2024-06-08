import { getURL } from "@/utils/socials";
import "./IconList.scss";
import Image from "next/image";

export default function IconList(props: any) {
	return (
		<div className="icon-list">
			{props.icons.map((icon: string, index: number) => (
				<a
					key={`icon-${index}`}
					href={
						getURL(icon.replace("-white", "").toLowerCase()) || "#"
					}
					target="_blank"
				>
					<Image
						src={`/assets/icons/${icon}.svg`}
						alt={`${icon} logo`}
						width={50}
						height={50}
					/>
				</a>
			))}
		</div>
	);
}
