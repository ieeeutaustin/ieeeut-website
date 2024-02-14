/*
    This file is where you can add short URLs for events or whatever.
*/

// THESE NEED TO BE IN LOWER CASE (this lets the short url be case INsensitive)
const shortURLs: any = {
	"s24-im": "https://docs.google.com/document/d/15DkripHZxPdFSmbZZUM3Bef_IMIYvplAu2oCK3mc88g/edit?usp=sharing",
	"hdr": "https://forms.gle/998bY938zhcbzEF38",
	"gm-1": "https://forms.gle/998bY938zhcbzEF38",
	"joinafam": "https://docs.google.com/forms/d/e/1FAIpQLSenTEc-6Dt2COxmcLGAwepvuRl9AIwC89o4hUVLvnYbAUSiOg/viewform",
	"ecjescape": "https://docs.google.com/forms/d/e/1FAIpQLSdC9p8ozE0-6I8MEZBlMgLvvBc7udhvkar7djfrAqVcTyvfoA/viewform?usp=sf_link",
	"valwithval": "https://forms.gle/4yPjqbx6jrKrq5Bp6",
	"girlday": "https://forms.gle/awFx7b4ure2ymPxFA"
};

export function getShortURL(name: string) {
	return shortURLs[name] || null;
}
