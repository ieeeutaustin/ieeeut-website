import "@/styles/globals.scss";
import "@/styles/main.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin-ext"],
	weight: ["400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: '--custom-font-poppins',
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
			<link
				rel="icon"
				href="./assets/images/branding/ieeeut-logo.jpg"
				sizes="any"
			/>
			<link
				rel="shortcut icon"
				href="./assets/images/branding/ieeeut-logo.jpg"
			/>
			<body className={`${poppins.variable}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
