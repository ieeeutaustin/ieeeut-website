"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import { getShortURL } from "@/utils/shortURLs";
import { getURL } from "@/utils/socials";

export default function NotFound() {
	const [redirecting, setRedirecting] = useState(true);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const parsedPathname = pathname.split("/")[1].toLowerCase();
		const url = getShortURL(parsedPathname) || getURL(parsedPathname);

		if (url) {
			router.replace(url);
		} else setRedirecting(false);
	}, [pathname, router]);

	return (
		<div>
			{redirecting ? (
				<HeaderSection title="Redirecting..." />
			) : (
				<HeaderSection
					title="404"
					desc={`Looks like "${pathname}" doesn't exist...`}
					image="/assets/images/backgrounds/BlueGradient.jpg"
					buttonName="Home"
					buttonLink="/"
					buttonNewWindow={false}
				/>
			)}
		</div>
	);
}
