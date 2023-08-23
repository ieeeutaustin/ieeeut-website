/*
    This file is where you can edit existing links
*/

const links: any = {
	instagram: {
		name: "Instagram",
		url: "https://www.instagram.com/ieee.ut",
		icon: "/assets/icons/instagram.svg"
	},
	discord: {
		name: "Discord",
		url: "https://discord.gg/pHVzWyPRCe",
		icon: "/assets/icons/discord.svg"
	},
	slack: {
		name: "Slack",
		url: "https://join.slack.com/t/ieeeutaustin/shared_invite/zt-21fqymxcw-yLl3XOcXttt9tTEcNrcEMA",
		icon: "/assets/icons/slack.svg"
	},
	gcal: {
		name: "Google Calendar",
		url: "https://ieeeut.us2.list-manage.com/track/click?u=d3062749e379e986e832fe901&id=48a630aaa0&e=80045ad49e",
		icon: "/assets/icons/gcal.svg"
	},
	tiktok: {
		name: "TikTok",
		url: "https://www.tiktok.com/@ieee.ut",
		icon: "/assets/icons/tiktok.svg"
	},
	linkedin: {
		name: "LinkedIn",
		url: "https://www.linkedin.com/company/ieee-ut-austin/",
		icon: "/assets/icons/linkedin.svg"
	},
	youtube: {
		name: "YouTube",
		url: "https://www.youtube.com/channel/UC0zqc1xWxOr4O7BOr37jKQg",
		icon: "/assets/icons/youtube.svg"
	},

	facebook: {
		name: "Facebook",
		url: "https://www.facebook.com/ieeeut",
		icon: "/assets/icons/facebook.svg"
	},
	email: {
		name: "Email",
		url: "mailto:ieee@ieeeut.org",
		icon: "/assets/icons/email.svg"
	}
};

export function getLinks() {
	return links;
}

export function getURL(name: string) {
	return links[name]?.url || null;
}
