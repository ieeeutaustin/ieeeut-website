import "@/styles/globals.scss";
import "@/styles/main.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { Poppins } from "next/font/google";
import { Metadata } from "next";

const poppins = Poppins({
	subsets: ["latin-ext"],
	weight: ["400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: '--custom-font-poppins',
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.URL || "https://ieee.ece.utexas.edu"),
	title: "IEEE UT",
	description: "UT Austin's largest ECE student org that combines social, academic, and professional!",
	openGraph: {
		title: "IEEE UT",
		description: "UT Austin's largest ECE student org that combines social, academic, and professional!",
		url: "https://ieee.ece.utexas.edu",
		images: ["/assets/images/branding/meta-image.jpg"],
	},
	twitter: {
		title: "IEEE UT",
		description: "UT Austin's largest ECE student org that combines social, academic, and professional!",
		images: ["/assets/images/branding/meta-image.jpg"],
	}
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
