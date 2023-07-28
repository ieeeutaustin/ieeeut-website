import TextSection from "@/components/TextSection/TextSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import OfficerSection from "@/components/OfficersSection/OfficerSection";
import Button from "@/components/Button/Button";
import Link from "next/link";

export const metadata = {
	title: "Links"
};

export default function Links() {
	const links = [
		{
			name: "TikTok",
			link: "https://www.tiktok.com/@ieee.ut"
		},
		{
			name: "Slack",
			link: "http://ieeeutexas.slack.com/"
		},
		{
			name: "Instagram",
			link: "https://www.instagram.com/ieee.ut/?hl=en"
		},
		{
			name: "Google Calendar",
			link: "https://ieeeut.us2.list-manage.com/track/click?u=d3062749e379e986e832fe901&id=48a630aaa0&e=80045ad49e"
		},
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/company/ieee-ut-austin/"
		},
		{
			name: "YouTube",
			link: "https://www.youtube.com/channel/UC0zqc1xWxOr4O7BOr37jKQg"
		},
		{
			name: "Discord",
			link: "https://discord.gg/yAsNdxnREs"
		},
		{
			name: "Facebook",
			link: "https://www.facebook.com/ieeeut"
		}
	];
	return (
		<>
			<h3>https://linktr.ee/utieee</h3>
			<ul>
				{links.map((link) => (
					<li key={link.name}>
						<Button
							name={link.name}
							link={link.link}
							newWindow={true}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
