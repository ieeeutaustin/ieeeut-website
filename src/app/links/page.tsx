import Button from "@/components/Button/Button";
import LinksSection from "@/components/LinksSection/LinksSection";

export const metadata = {
	title: "Links | IEEE UT"
};

export default function Links() {
	const links = [
		{
			name: "Instagram",
			link: "https://www.instagram.com/ieee.ut",
			icon: "/assets/icons/instagram.svg"
		},
		{
			name: "Slack",
			link: "https://join.slack.com/t/ieeeutaustin/signup",
			icon: "/assets/icons/slack.svg"
		},
		{
			name: "Discord",
			link: "https://discord.gg/yAsNdxnREs",
			icon: "/assets/icons/discord.svg"
		},

		{
			name: "Google Calendar",
			link: "https://ieeeut.us2.list-manage.com/track/click?u=d3062749e379e986e832fe901&id=48a630aaa0&e=80045ad49e",
			icon: "/assets/icons/gcal.svg"
		},
		{
			name: "TikTok",
			link: "https://www.tiktok.com/@ieee.ut",
			icon: "/assets/icons/tiktok.svg"
		},
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/company/ieee-ut-austin/",
			icon: "/assets/icons/linkedin.svg"
		},
		{
			name: "YouTube",
			link: "https://www.youtube.com/channel/UC0zqc1xWxOr4O7BOr37jKQg",
			icon: "/assets/icons/youtube.svg"
		},

		{
			name: "Facebook",
			link: "https://www.facebook.com/ieeeut",
			icon: "/assets/icons/facebook.svg"
		},
		{
			name: "Email",
			link: "mailto:ieee@ieeeut.org",
			icon: "/assets/icons/email.svg"
		}
	];
	return (
		<div>
			<LinksSection links={links} />
		</div>
	);
}
