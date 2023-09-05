/*
    This file is where you can add short URLs for events or whatever.
*/

// THESE NEED TO BE IN LOWER CASE (this lets the short url be case INsensitive)
const shortURLs: any = {
	officehours: "/assets/images/flyers/Office_Hours_F23.png",
	gte: "https://docs.google.com/document/d/1H3BMapQV1r5jjtzWx6pEpjJb-CXcKQcgKl--I8qOWdY/edit?usp=sharing",
	"gm-1": "https://docs.google.com/document/d/1Dj0Z0KZcdj5MAn1SHXBxQa-YntquTGqhTm3z7bM5j1Q/edit",
	expo: "https://forms.gle/nN4dKPgon8ct4oaE7",
	"gm-2": "https://forms.gle/8wCtzPKzyhMYoCcD9",
	"leader-retreat": "https://forms.gle/vmxtQAMKQyJkypSo8",
	"gm-3": "https://forms.gle/xPAoKseoxT2YJ7qV7",
	"gm-4": "https://forms.gle/XesAwtDjfZRtk94v5",
	"gm-5": "https://forms.gle/Nc9arNyk1FYiriteA"
};

export function getShortURL(name: string) {
	return shortURLs[name] || null;
}
