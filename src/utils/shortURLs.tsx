/*
    This file is where you can add short URLs for events or whatever.
*/

// THESE NEED TO BE IN LOWER CASE (this lets the short url be case INsensitive)
const shortURLs: any = {
	officehours: "/assets/images/flyers/Office_Hours_F23.png",
	gte: "https://docs.google.com/document/d/1H3BMapQV1r5jjtzWx6pEpjJb-CXcKQcgKl--I8qOWdY/edit?usp=sharing",
	"gm-1": "https://docs.google.com/document/d/1Dj0Z0KZcdj5MAn1SHXBxQa-YntquTGqhTm3z7bM5j1Q/edit",
	expo: "https://drive.google.com/file/d/199XnT_8EY0oekr1TesFqvx_eyRICZO0t/view",
	"gm-2": "https://forms.gle/8wCtzPKzyhMYoCcD9",
	"leader-retreat": "https://forms.gle/vmxtQAMKQyJkypSo8",
	"gm-3": "https://forms.gle/xPAoKseoxT2YJ7qV7",
	"gm-4": "https://forms.gle/XesAwtDjfZRtk94v5",
	"gm-5": "https://forms.gle/Nc9arNyk1FYiriteA",
	joinafam: "https://forms.gle/NbXRnRtzciX2eeHp6",
	"gm-6": "https://forms.gle/NojMY7x79V5Tjrho6",
	"gm-7": "https://forms.gle/fJiiRvhhjNdTPjWe6",
	hdr: "https://forms.gle/UhS3XSsFqq5ksc6T9",
	"gm-8": "https://forms.gle/nogbtaMtsEHW8TsS6",
	ltn: "https://forms.gle/vK8hzA1zQ7uJFmKa7",
	"gm-9": "https://forms.gle/Ww3uCGLk24hF7o369",
	"gm-10": "https://forms.gle/o4VmirxZgW6KNSDh7",
	"arduino": "https://drive.google.com/drive/folders/1NoiDOtpY_jIV9JWX9FAP1PpADzL-Vcxr?usp=drive_link"
};

export function getShortURL(name: string) {
	return shortURLs[name] || null;
}
