import "@/styles/globals.scss";
import "@/styles/main.css";

import { Sofia_Sans } from "next/font/google";

const sofiaSans = Sofia_Sans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata = {
	title: "IEEE UT"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<link rel="icon" href="/icons/ieeeut-logo.jpg" sizes="any" />
			<link rel="shortcut icon" href="./icons/ieeeut-logo.jpg" />
			<body className={sofiaSans.className}>{children}</body>
		</html>
	);
}
