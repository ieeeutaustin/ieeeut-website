/*
    This file is where you can add short URLs for events or whatever.
*/

// THESE NEED TO BE IN LOWER CASE (this lets the short url be case INsensitive)
const shortURLs: any = {
	insta: "https://instagram.com/ieee.ut",
	gte: "https://docs.google.com/document/d/1H3BMapQV1r5jjtzWx6pEpjJb-CXcKQcgKl--I8qOWdY/edit?usp=sharing",
	"gm-1": "https://forms.gle/k5x9hmimgZicZcTW6",
	expo: "https://forms.gle/nN4dKPgon8ct4oaE7",
	officehours: "/assets/images/flyers/Office_Hours_F23.png"
};

export function getShortURL(name: string) {
	return shortURLs[name] || null;
}
